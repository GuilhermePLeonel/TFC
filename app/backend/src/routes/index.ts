import { Router } from 'express';
import Login from './login.router';
import Team from './team.router';

const router = Router();

router.use('/login', Login);
router.use('/teams', Team);

export default router;
