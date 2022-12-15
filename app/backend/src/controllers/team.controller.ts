import { Request, Response } from 'express';
import TeamService from '../services/team.service';

export default class TeamController {
  static async allTeams(req: Request, res: Response) {
    const allTeam = await TeamService.allTeams();
    return res.status(200).json(allTeam);
  }

  static async teamById(req: Request, res: Response) {
    const { id } = req.params;
    const teamById = await TeamService.teamById(id);
    return res.status(200).json(teamById);
  }
}
