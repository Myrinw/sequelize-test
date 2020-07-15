'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return await queryInterface.bulkInsert(
      "todoItems",
      [
        {
          todoList: 1,
          task: "clean garden",
          deadline: new Date(2020, 8, 20),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          todoList: 2,
          task: "make food",
          deadline: new Date(2020, 8, 21),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          todoList: 1,
          task: "walk dog",
          deadline: new Date(2020, 8, 18),
          createdAt: new Date(),
          updatedAt: new Date(),
        }
      ]
    );
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
