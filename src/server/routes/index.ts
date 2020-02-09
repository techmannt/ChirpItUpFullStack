import { Router } from 'express';
import ChirpsRouter from './chirps';
import usersRouter from './users';

const router = Router();
router.use('/chirps', ChirpsRouter);
router.use('/users', usersRouter);

export default router;
