import express from 'express';
import controller from '../controllers/user';
import extractJWT from '../middleware/extractJWT';
// import cookieParser from 'cookie-parser';

const router = express.Router();

// router.use(cookieParser());

//user routes
router.get('/validate', extractJWT, controller.validateToken);
router.post('/auth/register', controller.register);
router.post('/auth/login', controller.login);
router.post('/auth/forgot-password', controller.login);
router.post('/auth/resend-password/:id/:token', controller.login);
router.get('/user/all', controller.getAllUsers);
router.get('/user/:id', controller.getUser);

router.get('/user', controller.test);

export = router;
