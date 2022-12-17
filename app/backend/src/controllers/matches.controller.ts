import { Request, Response } from 'express';
import MatchesService from '../services/matches.service';
import JWT from '../utils/jwt';

export default class MatchesController {
  jwt = new JWT();
  constructor(private matchesService: MatchesService = new MatchesService()) {}

  AllMatches = async (req: Request, res: Response) => {
    const { inProgress } = req.query;
    const matches = await this.matchesService.allMatches(inProgress as string);

    return res.status(200).json(matches);
  };

  matchesSave = async (req: Request, res: Response) => {
    const { authorization } = req.headers;
    const { homeTeam, awayTeam, homeTeamGoals, awayTeamGoals } = req.body;
    const validation = this.jwt.validateMatchesToken(authorization as string);
    if (validation) {
      return res.status(validation.status).json({ message: validation.message });
    }
    const matches = { homeTeam, awayTeam, homeTeamGoals, awayTeamGoals };
    const newMatch = await this.matchesService.matchesSave(matches);
    if (newMatch.status !== 201) {
      return res.status(newMatch.status).json({ message: newMatch.message });
    }
    return res.status(newMatch.status).json(newMatch.message);
  };

  matchUpdate = async (req: Request, res: Response) => {
    const { id } = req.params;
    await this.matchesService.matchesUpdate(Number(id));
    return res.status(200).json({ message: 'Finished!' });
  };

  resultUpdate = async (req: Request, res: Response) => {
    const { id } = req.params;
    const { homeTeamGoals, awayTeamGoals } = req.body;
    await this.matchesService.resultUpdate(Number(id), homeTeamGoals, awayTeamGoals);
    return res.status(200).json({ message: 'Updated!' });
  };
}
