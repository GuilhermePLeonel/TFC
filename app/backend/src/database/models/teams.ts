import { Model, STRING, INTEGER } from 'sequelize';
import db from '.';

class teams extends Model {
  declare id: number;
  declare teamName: string;
}

teams.init(
  {
    id: {
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
      type: INTEGER,
    },
    teamName: {
      allowNull: false,
      type: STRING,

    } },
  {
    underscored: true,
    sequelize: db,
    freezeTableName: true,
    timestamps: false,
  },
);

export default teams;
