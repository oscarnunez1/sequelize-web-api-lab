'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {

    await queryInterface.removeColumn('Accessories', 'bag');

  },

  async down (queryInterface, Sequelize) {

    await queryInterface.addColumn('Accessories', 'bag');
  }
};
