const Sequelize = require("sequelize");
const setModels = require("./models");

const config = require("../config/db");

const db = {};

let sequelize;
if (config[process.env.NODE_ENV || "development"]) {
  sequelize = new Sequelize(
    config[process.env.NODE_ENV || "development"].database,
    config[process.env.NODE_ENV || "development"].username,
    config[process.env.NODE_ENV || "development"].password,
    config.development
  );
} else {
  sequelize = new Sequelize(
    config.database,
    config.username,
    config.password,
    config
  );
}

setModels(sequelize, db);

Object.keys(db).forEach((modelName) => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

sequelize
  .authenticate()
  .then(() => {
    console.log("DB authenticated");
  })
  .catch((err) => {
    console.log("DB not authenticated", err);
  });

module.exports = db;
