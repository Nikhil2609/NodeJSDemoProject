import express from 'express';
import customerRouter from './customer.routes';
import authRouter from './auth.routes';

const router = express.Router();

router.use('/customers', customerRouter);
router.use('/auth', authRouter);

export default router;
