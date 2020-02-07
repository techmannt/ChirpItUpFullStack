// import { Router } from 'express';
import * as express from 'express';
import ChirpsRouter from './chirps';

const router = express.Router();
router.use('/chirps', ChirpsRouter);

export default router;
