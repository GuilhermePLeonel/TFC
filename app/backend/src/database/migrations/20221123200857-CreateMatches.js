'use strict';

const { QueryInterface } = require('sequelize');

module.exports = {
  async up(queryInterface, Sequelize) {
    await  queryInterface.createTable('matches',{
      id: {
        allowNull: false,
        autoIncrement: true,
        type: Sequelize.INTEGER,
        primaryKey: true,
      },
      home_team:{
        allowNull: false,
        type: Sequelize.INTEGER
      },
      home_team_goals:{
        allowNull: false,
        type: Sequelize.INTEGER
      },
      away_team:{
        allowNull: false,
        type: Sequelize.INTEGER
      },
      away_team_goals:{
        allowNull: false,
        type: Sequelize.INTEGER
      },
      in_progress:{
        allowNull: false,
        type: Sequelize.BOOLEAN
      }
    })
  },

  async down(queryInterface, Sequelize){
    await queryInterface.dropTable('matches')
  }
};
