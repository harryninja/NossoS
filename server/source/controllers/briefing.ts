import { NextFunction, Request, Response } from 'express';
import mongoose from 'mongoose';
import bcryptjs from 'bcryptjs';
import logging from '../config/logging';
import Event from '../models/briefing';
import signJWT from '../functions/signJTW';
import nodemailer from 'nodemailer';
import jwt from 'jsonwebtoken';

const NAMESPACE = 'Briefing';

const validateToken = (req: Request, res: Response, next: NextFunction) => {
    logging.info(NAMESPACE, 'Token validated, user authorized.');

    return res.status(200).json({
        message: 'Token(s) validated'
    });
};

const registerEvent = (req: Request, res: Response, next: NextFunction) => {
    let {
        evento,
        precisa,
        cidade,
        local,
        email,
        phone,
        alternatephone,
        address1,
        address2,
        country,
        cardnumber,
        cardmonth,
        cardyear,
        minOrcamento,
        maxOrcamento,
        prazoDate,
        largeArea,
        AlturaArea,
        total,
        formaPagamento,
        balcao,
        objetosSuspensos,
        freezer,
        pontosEletricos,
        tvQuantidade,
        painelLed,
        lixeiras,
        promoter,
        link } = req.body;

    // Validations
    if (!evento) {
        return res.status(422).json({ msg: 'Evento obrigatório!' });
    }
    if (!cidade) {
        return res.status(422).json({ msg: 'Informar cidade!' });
    }
    if (!local) {
        return res.status(422).json({ msg: 'Local obrigatório!' });
    }
    if (!phone) {
        return res.status(422).json({ msg: 'Telefone obrigatório!' });
    }
    if (!email) {
        return res.status(422).json({ msg: 'Informe o email!' });
    }
    if (!address1) {
        return res.status(422).json({ msg: 'Informe o endereço!' });
    }
    if (!country) {
        return res.status(422).json({ msg: 'Informe o país' });
    }
    if (!cardnumber) {
        return res.status(422).json({ msg: 'Informe o número do cartão!' });
    }
    if (!cardmonth) {
        return res.status(422).json({ msg: 'Informe o mês do cartão!' });
    }
    if (!cardyear) {
        return res.status(422).json({ msg: 'Informe o ano de vencimento do cartão!' });
    }

    const _briefing = new Event({
        _id: new mongoose.Types.ObjectId(),
        evento,
        precisa,
        cidade,
        local,
        email,
        phone,
        alternatephone,
        address1,
        address2,
        country,
        cardnumber,
        cardmonth,
        cardyear,
        minOrcamento,
        maxOrcamento,
        prazoDate,
        largeArea,
        AlturaArea,
        total,
        formaPagamento,
        balcao,
        objetosSuspensos,
        freezer,
        pontosEletricos,
        tvQuantidade,
        painelLed,
        lixeiras,
        promoter,
        link,
    });

    return _briefing
        .save()
        .then((briefing) => {
            return res.status(201).json({
                briefing
            });
        })
        .catch((error) => {
            return res.status(500).json({
                message: error.message,
                error
            });
        });
};

const getAllEvents = (req: Request, res: Response, next: NextFunction) => {
    Event.find()
        .then((briefing) => {
            return res.status(200).json({
                briefing: briefing
            });
        })
        .catch((error) => {
            return res.status(500).json({
                message: error.message,
                error
            });
        });
};

const getBriefing = (req: Request, res: Response, next: NextFunction) => {
    const { id } = req.params;

    Event.findOne({
        _id: id
    })
        .exec()
        .then((briefing) => {
            return res.status(200).json({
                briefing: briefing
            });
        })
        .catch((error) => {
            return res.status(500).json({
                message: error.message,
                error
            });
        });
};

export default { validateToken, registerEvent, getAllEvents, getBriefing };
