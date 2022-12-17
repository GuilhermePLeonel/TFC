import { Router } from 'express';
import Login from './login.router';
import Team from './team.router';
import Matches from './matches.router';
import {
  Leaderboard,
  LeaderboardAway,
  LeaderboardHome } from '../controllers/leaderboard.controller';

const router = Router();

router.use('/login', Login);
router.use('/teams', Team);
router.use('/matches', Matches);
router.get('/leaderboard', Leaderboard);
router.get('/leaderboard/away', LeaderboardAway);
router.get('/leaderboard/home', LeaderboardHome);

export default router;
