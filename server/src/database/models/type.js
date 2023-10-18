const { Model, Sequelize } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  const options = {
    sequelize,
    modelName: "Type",
    tableName: "types",
    timestamps: true,
    underscored: true,
  };

  class Type extends Model {
    static associate(db) {
      db.Type.belongsToMany(db.Budget, {
        through: "budget_type",
        as: "budgets",
        foreignKey: "budget_id",
      });

      db.Type.hasMany(db.Marketplace, {
        as: "marketplaces",
      });
      db.Type.hasMany(db.Transaction, {
        as: "transactions",
      });
    }
  }

  Type.init(
    {
      id: {
        type: DataTypes.UUID,
        primaryKey: true,
        defaultValue: Sequelize.UUIDV4,
      },
      name: { type: DataTypes.STRING },
      description: { type: DataTypes.STRING, allowNull: true },
    },
    options
  );

  return Type;
};
