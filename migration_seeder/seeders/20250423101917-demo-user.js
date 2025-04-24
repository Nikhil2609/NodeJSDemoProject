'use strict';

const { create } = require('domain');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'Users',
      [
        {
          name: 'John Doe',
          email: 'john@yopmail.com',
          password: '123456',
          mobile: '1234567890',
          isActive: false,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: 'Smit Patel',
          email: 'smit.patel@yopmail.com',
          password: '1234567',
          mobile: '1234567890',
          isActive: true,
          createdAt: new Date(),
          updatedAt: new Date()
        }
      ],
      {}
    );
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
     */
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Users', [], {});
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
