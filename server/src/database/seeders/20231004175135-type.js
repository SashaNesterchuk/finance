"use strict";
const { v4: uuidv4 } = require("uuid");

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    const types = [
      "Beauty",
      "Car",
      "Transport",
      "Travel",
      "Work",
      "Bills & Fees",
      "Education",
      "Entertainment",
      "Family & Personal",
      "Food & Drink",
      "Gifts",
      "Groceries",
      "Healthcare",
      "Home",
      "Other",
      "Shopping",
      "Sport & Hobbies",
    ];
    const seeders = [];
    for (let i = 0; i < types.length; i++) {
      seeders.push({
        id: uuidv4(),
        name: types[i],
        created_at: new Date().toISOString().slice(0, 19).replace("T", " "),
        updated_at: new Date().toISOString().slice(0, 19).replace("T", " "),
      });
    }
    await queryInterface.bulkInsert("types", seeders, {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("types", null, {});
  },
};
