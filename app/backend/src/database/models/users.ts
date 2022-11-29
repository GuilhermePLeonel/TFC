import { Model, STRING, INTEGER } from 'sequelize';
import db from '.';

class Users extends Model {
  declare id: number;
  declare teamName: string;
}

Users.init(
  {
    id: {
      allowNull: false,
      autoIncrement: true,
      type: INTEGER,
    },
    username: {
      allowNull: false,
      type: STRING,

    },
    role: {
      allowNull: false,
      type: STRING,

    },
    email: {
      allowNull: false,
      type: STRING,

    },
    password: {
      allowNull: false,
      type: STRING,

    },
  },
  {
    underscored: true,
    sequelize: db,
    freezeTableName: true,
    timestamps: false,
  },
);
export default Users;
