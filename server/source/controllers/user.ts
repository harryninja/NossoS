import { NextFunction, Request, Response } from 'express';
import mongoose from 'mongoose';
import bcryptjs from 'bcryptjs';
import logging from '../config/logging';
import User from '../models/user';
import signJWT from '../functions/signJTW';
import nodemailer from 'nodemailer';
import jwt from 'jsonwebtoken';

const NAMESPACE = 'User';

const validateToken = (req: Request, res: Response, next: NextFunction) => {
    logging.info(NAMESPACE, 'Token validated, user authorized.');

    return res.status(200).json({
        message: 'Token(s) validated'
    });
};

const test = (req: Request, res: Response, next: NextFunction) => {
    console.log('test');
};

const register = (req: Request, res: Response, next: NextFunction) => {
    let { name, password, reEnterPassword, phone, company, email, profession } = req.body;

    bcryptjs.hash(password, 10, (hashError, hash) => {
        if (hashError) {
            return res.status(401).json({
                message: hashError.message,
                error: hashError
            });
        }
        const emailExist = User.find({ email: email });
        if (emailExist == email) {
            return res.status(422).json({ msg: 'Email já existe em nosso banco de dados' });
        }

        // Validations
        if (!name) {
            return res.status(422).json({ msg: 'Nome obrigatório!' });
        }
        if (!company) {
            return res.status(422).json({ msg: 'Informar empresa!' });
        }
        if (!email) {
            return res.status(422).json({ msg: 'Email obrigatório!' });
        }
        if (!phone) {
            return res.status(422).json({ msg: 'Telefone obrigatório!' });
        }
        if (!password) {
            return res.status(422).json({ msg: 'Informa a senha!' });
        }
        if (password !== reEnterPassword) {
            return res.status(422).json({ msg: 'As senhas não coincidem!' });
        }

        const _user = new User({
            _id: new mongoose.Types.ObjectId(),
            name,
            company,
            email,
            phone,
            password: hash,
            profession
        });

        return _user
            .save()
            .then((user) => {
                return res.status(201).json({
                    user
                });
            })
            .catch((error) => {
                return res.status(500).json({
                    message: error.message,
                    error
                });
            });
    });
};

const validateCookies = (req: Request, res: Response, next: NextFunction) => {
    const { cookies } = req;
    console.log(cookies);
    next();
};

const login = (req: Request, res: Response, next: NextFunction) => {
    let { email, password } = req.body;

    User.find({ email })
        .exec()
        .then((users) => {
            if (users.length !== 1) {
                return res.status(401).json({
                    message: 'Unauthorized'
                });
            }

            bcryptjs.compare(password, users[0].password, (error, result) => {
                if (error) {
                    return res.status(401).json({
                        message: 'Password Mismatch'
                    });
                } else if (result) {
                    signJWT(users[0], (_error, token) => {
                        if (_error) {
                            return res.status(500).json({
                                message: _error.message,
                                error: _error
                            });
                        } else if (token) {
                            return res.status(200).json({
                                message: 'Auth successful',
                                token: token,
                                user: users[0]
                            });
                        }
                    });
                    // res.cookie('session_id', '123456');
                }
            });
        })
        .catch((err) => {
            console.log(err);
            res.status(500).json({
                error: err
            });
        });
};

const getAllUsers = (req: Request, res: Response, next: NextFunction) => {
    User.find()
        .select('-password')
        .exec()
        .then((users) => {
            return res.status(200).json({
                users: users,
                count: users.length
            });
        })
        .catch((error) => {
            return res.status(500).json({
                message: error.message,
                error
            });
        });
};

const getUser = (req: Request, res: Response, next: NextFunction) => {
    const { id } = req.params;

    User.findOne({
        _id: id
    })
        .select('-password')
        .exec()
        .then((user) => {
            return res.status(200).json({
                user: user
            });
        })
        .catch((error) => {
            return res.status(500).json({
                message: error.message,
                error
            });
        });
};

const postForgotPassword = async (req: Request, res: Response) => {
    const { email } = req.body;

    const userEmail = await User.findOne({ where: { email } });

    if (email !== userEmail?.email) {
        return res.send('User not registered');
    }

    const transporter = nodemailer.createTransport({
        host: 'smtp.mailtrap.io',
        port: 2525,
        auth: {
            user: '9fbe3a2eeacb39',
            pass: 'ec41dce2d957a9'
        }
    });

    const pass = userEmail?.password;
    const secret = 'secret jwt' + pass;
    const payload = {
        email: userEmail?.email,
        id: userEmail?.id
    };

    const token = jwt.sign(payload, secret, { expiresIn: '1d' });
    const link = `http://localhost:5000/reset-password/${userEmail?.id}/${token}`;
    console.log(link);

    transporter.sendMail({
        from: 'Administrator Tester',
        to: email,
        subject: 'Reset password',
        text: 'Hello your new password can be found on ' + link
    });

    res.send('Password link has been sent to your email.');
};

const getResetPassword = async (req: Request, res: Response) => {
    const { id, token } = req.params;

    const userEmail = await User.findOne({ where: { id } });

    if (id !== userEmail?.id) {
        return res.send('Invalid id');
    }

    const secret = 'secret jwt' + userEmail?.password;
    try {
        jwt.verify(token, secret);
        res.render('reset-password', { email: userEmail.email });
    } catch (error) {
        console.log(error);
        res.send(error);
    }
};

const postResetPassword = async (req: Request, res: Response) => {
    const { id, token } = req.params;
    const { password, password2 } = req.body;

    const user = await User.findOne({ where: { id } });

    if (id !== user?.id) {
        return res.send('Invalid id');
    }

    if (password !== password2) {
        return res.send('Passwords does not match');
    }

    const secret = 'secret jwt' + user?.password;
    try {
        jwt.verify(token, secret);
        user.password = password;
        // await User.save(user)
    } catch (error) {
        console.log(error);
        res.send(error);
    }
};

export default { test, validateToken, register, login, getAllUsers, getUser, postForgotPassword, getResetPassword, postResetPassword };
