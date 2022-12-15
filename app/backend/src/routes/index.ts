import { Router } from 'express';
import Login from './login.router';
import Team from './team.router';
import Matches from './matches.router';

const router = Router();

router.use('/login', Login);
router.use('/teams', Team);
router.use('/matches', Matches);

export default router;
