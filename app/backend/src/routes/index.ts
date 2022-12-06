import { Router } from 'express';
import Login from './login.router';

const router = Router();

router.use('/login', Login);

export default router;
