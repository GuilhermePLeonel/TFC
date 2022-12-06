import { Model, INTEGER } from 'sequelize';
import db from '.';

class users extends Model {
  declare id: number;
  declare username: string;
  declare role: string;
  declare email: string;
  declare password: string;
}

users.init(
  {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: INTEGER,
    },
    username: {
      allowNull: false,
      type: INTEGER,

    },
    role: {
      allowNull: false,
      type: INTEGER,

    },
    password: {
      allowNull: false,
      type: INTEGER,

    },
    email: {
      allowNull: false,
      type: INTEGER,

    },
  },
  {
    underscored: true,
    sequelize: db,
    timestamps: false,
  },
);
export default users;
