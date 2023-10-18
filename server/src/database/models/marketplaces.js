const { Model, Sequelize } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  const options = {
    sequelize,
    modelName: "Marketplace",
    tableName: "marketplaces",
    timestamps: true,
    underscored: true,
  };

  class Marketplace extends Model {
    static associate(db) {
      db.Marketplace.belongsTo(db.Type);
      db.Marketplace.hasMany(db.Transaction, { as: "transactions" });
    }
  }

  Marketplace.init(
    {
      id: {
        type: DataTypes.UUID,
        primaryKey: true,
        defaultValue: Sequelize.UUIDV4,
      },
      name: { type: DataTypes.STRING },
    },
    options
  );

  return Marketplace;
};
