'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Users', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.BIGINT
      },
      usuName: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      usuLastName: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      usuEmail: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      usuPassword: {
        type: Sequelize.STRING
      },
      usuStatus: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      rolId: {
        type: Sequelize.BIGINT,
        allowNull: false,
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Users');
  }
};