'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    
    const date = new Date()

    await queryInterface.bulkInsert('Drones', [{
      name: 'Air 2S',
      brand: 'DJI',
      releaseYear: '2021',
      createdAt: date,
      updatedAt: date,
    }])

  },

  async down (queryInterface, Sequelize) {

    await queryInterface.bulkDelete('Drones', null, {})

  }
};
