'use strict';

const { QueryInterface } = require('sequelize');

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('teams',{
      id: {
        allowNull: false,
        autoIncrement: true,
        type: Sequelize.INTEGER,
        primaryKey: true,
      },
      team_name:{
        allowNull: false,
        type: Sequelize.STRING
      }
    })
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('teams')
  }
};
