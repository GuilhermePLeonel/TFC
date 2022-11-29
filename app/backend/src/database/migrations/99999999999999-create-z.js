'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('trybe_eval', {
      id: {
        primaryKey: true,
        type: Sequelize.INTEGER,
      }
    });
  },
  async down (queryInterface){
    await queryInterface.dropTable('trybe_eval');
  },
};
