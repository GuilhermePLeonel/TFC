import Team from '../database/models/teams';

export default class TeamService {
  static async allTeams(): Promise<Team[]> {
    const allteams = await Team.findAll();
    return allteams;
  }

  static async teamById(id: string): Promise<Team | null> {
    const idTeam = await Team.findOne({ where: { id } });
    return idTeam;
  }
}
