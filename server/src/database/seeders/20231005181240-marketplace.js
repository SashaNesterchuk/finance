"use strict";
const { v4: uuidv4 } = require("uuid");

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    const types = await queryInterface.sequelize.query(
      "SELECT * FROM finance.types"
    );
    let typesMap = {};
    for (let i = 0; i < types[0].length; i++) {
      const type = types[0][i];
      typesMap[type.name] = type.id;
    }

    const marketplaces = [
      {
        name: "Zabka",
        type_id: typesMap["Groceries"],
      },
      {
        name: "MCdonalds",
        type_id: typesMap["Food & Drink"],
      },
      {
        name: "Sister s aroma",
        type_id: typesMap["Beauty"],
      },
      {
        name: "Zalando",
        type_id: typesMap["Shopping"],
      },
      {
        name: "Allegro",
        type_id: typesMap["Shopping"],
      },
      {
        name: "Green Caffe Nero",
        type_id: typesMap["Food & Drink"],
      },
      {
        name: "OtherStories",
        type_id: typesMap["Shopping"],
      },
      {
        name: "Rossmann",
        type_id: typesMap["Groceries"],
      },
      {
        name: "Apple.com/bill",
        type_id: typesMap["Bills & Fees"],
      },
      {
        name: "Empik",
        type_id: typesMap["Shopping"],
      },
      {
        name: "Goraco Polecam",
        type_id: typesMap["Food & Drink"],
      },
      {
        name: "Biedronka",
        type_id: typesMap["Groceries"],
      },
      {
        name: "Typika Coffee",
        type_id: typesMap["Food & Drink"],
      },
      {
        name: "Zdrofit",
        type_id: typesMap["Sport & Hobbies"],
      },
      {
        name: "orange.pl",
        type_id: typesMap["Sport & Hobbies"],
      },
      {
        name: "Biletomat",
        type_id: typesMap["Transport"],
      },
      {
        name: "Bolt",
        type_id: typesMap["Food & Drink"],
      },
      {
        name: "Castorama",
        type_id: typesMap["Home"],
      },
      {
        name: "CCC",
        type_id: typesMap["Shopping"],
      },
      {
        name: "Rituals",
        type_id: typesMap["Beauty"],
      },
      {
        name: "TK Maxx",
        type_id: typesMap["Shopping"],
      },
      {
        name: "Eurospar",
        type_id: typesMap["Groceries"],
      },
      {
        name: "Lubaszka",
        type_id: typesMap["Food & Drink"],
      },
      {
        name: "Wolt",
        type_id: typesMap["Food & Drink"],
      },
      {
        name: "Trendi",
        type_id: typesMap["Beauty"],
      },
      {
        name: "jakdojade",
        type_id: typesMap["Transport"],
      },
      {
        name: "Carrefour",
        type_id: typesMap["Groceries"],
      },
      {
        name: "Half Price",
        type_id: typesMap["Shopping"],
      },
      {
        name: "Notino",
        type_id: typesMap["Beauty"],
      },
      {
        name: "Duka",
        type_id: typesMap["Home"],
      },
      {
        name: "Uniqlo",
        type_id: typesMap["Shopping"],
      },
      {
        name: "Byc moze",
        type_id: typesMap["Food & Drink"],
      },
    ];

    for (let i = 0; i < marketplaces.length; i++) {
      marketplaces[i] = {
        ...marketplaces[i],
        id: uuidv4(),
        created_at: new Date().toISOString().slice(0, 19).replace("T", " "),
        updated_at: new Date().toISOString().slice(0, 19).replace("T", " "),
      };
    }

    await queryInterface.bulkInsert("marketplaces", marketplaces, {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("marketplaces", null, {});
  },
};
