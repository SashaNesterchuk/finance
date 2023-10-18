"use strict";
const parser = require("../../parser");

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    const marketplaces = await queryInterface.sequelize.query(
      "SELECT * FROM finance.marketplaces"
    );

    const transactions = await queryInterface.sequelize.query(
      "SELECT * FROM finance.transactions"
    );

    const createTransactions = parser(transactions[0], marketplaces[0]);

    await queryInterface.bulkInsert("transactions", createTransactions, {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("transactions", null, {});
  },
};
