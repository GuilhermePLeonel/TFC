import { DataTypes, Model } from 'sequelize';
import db from '.';
import Teams from './teams';

export default class Matches extends Model {
  declare id: number;
  declare homeTeam: number;
  declare homeTeamGoals: number;
  declare awayTeamGoals: number;
  declare inProgress: boolean;
  declare awayTeam: number;
}

Matches.init(
  {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER,
    },
    homeTeam: {
      allowNull: false,
      type: DataTypes.INTEGER,
    },
    homeTeamGoals: {
      allowNull: false,
      type: DataTypes.INTEGER,
    },
    awayTeam: {
      allowNull: false,
      type: DataTypes.INTEGER,
    },
    awayTeamGoals: {
      allowNull: false,
      type: DataTypes.INTEGER,
    },
    inProgress: {
      allowNull: false,
      type: DataTypes.INTEGER,
    } },
  {
    sequelize: db,
    underscored: true,
    modelName: 'matches',
    timestamps: false,
  },
);

Matches.belongsTo(Teams, { foreignKey: 'homeTeam', as: 'teamHome' });
Matches.belongsTo(Teams, { foreignKey: 'awayTeam', as: 'teamAway' });
Teams.hasMany(Matches, { foreignKey: 'homeTeam', as: 'homeMatches' });
Teams.hasMany(Matches, { foreignKey: 'awayTeam', as: 'awayMatches' });
