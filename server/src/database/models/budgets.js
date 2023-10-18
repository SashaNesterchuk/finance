const { Model, Sequelize } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  const options = {
    sequelize,
    modelName: "Budget",
    tableName: "budgets",
    timestamps: true,
    underscored: true,
  };

  class Budget extends Model {
    static associate(db) {
      db.Budget.belongsToMany(db.Type, {
        through: "budget_type",
        as: "types",
        foreignKey: "type_id",
      });
    }
  }

  Budget.init(
    {
      id: {
        type: DataTypes.UUID,
        primaryKey: true,
        defaultValue: Sequelize.UUIDV4,
      },
      income: { type: DataTypes.STRING },
      currency: { type: DataTypes.STRING },
      start_date: { type: DataTypes.DATE },
      end_date: { type: DataTypes.DATE },
    },
    options
  );

  return Budget;
};
