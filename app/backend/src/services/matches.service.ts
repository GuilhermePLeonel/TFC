import Matches from '../database/models/matches';
import TeamModel from '../database/models/teams';
import { IMatchesDB, IMatchesReturn } from '../interfaces/IMatches';

export default class MatchesService {
  constructor(readonly matchesModel = Matches) {}

  async allMatches(inProgress: string | undefined): Promise<IMatchesReturn[]> {
    const result = await this.matchesModel.findAll({
      include: [{
        model: TeamModel,
        as: 'teamHome',
        attributes: { exclude: ['id'] },
      },
      { model: TeamModel,
        as: 'teamAway',
        attributes: { exclude: ['id'] } },
      ],
    });

    if (inProgress === 'true') {
      return result.filter((match) => match.inProgress);
    } if (inProgress === 'false') {
      return result.filter((match) => !match.inProgress);
    }
    return result;
  }

  async matchesSave({ homeTeam, awayTeam, homeTeamGoals, awayTeamGoals }: IMatchesDB) {
    const all = await this.allMatches(undefined);
    const first = all.find((match) => match.id === homeTeam);
    const second = all.find((match) => match.id === awayTeam);
    if (!first || !second) {
      return { status: 404, message: 'There is no team with such id!' };
    }
    if (homeTeam === awayTeam) {
      return { status: 422,
        message: 'It is not possible to create a match with two equal teams' };
    }
    const createdMatch = await this.matchesModel
      .create({ homeTeam, awayTeam, homeTeamGoals, awayTeamGoals, inProgress: true });
    return { status: 201, message: createdMatch };
  }

  async matchesUpdate(id: number) {
    await this.matchesModel.update({ inProgress: false }, { where: { id } });
  }

  async resultUpdate(id: number, homeTeamGoals: number, awayTeamGoals: number) {
    await this.matchesModel.update({ homeTeamGoals, awayTeamGoals }, { where: { id } });
  }
}
