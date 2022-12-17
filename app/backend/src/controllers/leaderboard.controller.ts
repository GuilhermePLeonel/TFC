import { Request, Response } from 'express';
import {
  sortLeaderboard,
  allMatches,
  inHomeMatches,
  atAwayMatches } from '../services/leaderboard.service';

export const Leaderboard = async (_req: Request, res: Response) => {
  const result = await sortLeaderboard(allMatches);
  return res.status(200).json(result);
};

export const LeaderboardHome = async (_req: Request, res: Response) => {
  const result = await sortLeaderboard(inHomeMatches);
  return res.status(200).json(result);
};
export const LeaderboardAway = async (_req: Request, res: Response) => {
  const result = await sortLeaderboard(atAwayMatches);
  return res.status(200).json(result);
};
