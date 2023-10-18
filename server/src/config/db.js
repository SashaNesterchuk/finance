require("dotenv").config();

const config = {};
const logging = false;
config.environment = process.env.NODE_ENV || "development";
config.sequelize = {};
config.sequelize.username = process.env.DB_USER;
config.sequelize.password = process.env.DB_PASS;
config.sequelize.database = process.env.DB_NAME;
config.sequelize.host = process.env.DB_HOST;
config.sequelize.port = process.env.DB_PORT;
config.sequelize.dialect = process.env.DB_DIALECT;
config.sequelize.logging = logging;

//I don't know what it is
config.sequelize.pool = {
  max: 5,
  min: 0,
  acquire: 30000,
  idle: 10000,
};
config.sequelize.define = {
  charset: "utf8mb4",
  dialectOptions: {
    collate: "utf8mb4_unicode_ci",
    underscored: true,
    freezeTableName: true,
  },
};

config.ROUND_SALT = 8;
const cfg = {};
cfg[config.environment] = config.sequelize;

module.exports = cfg;
