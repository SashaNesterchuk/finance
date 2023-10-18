const { Model, Sequelize } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  const options = {
    sequelize,
    modelName: "Transaction",
    tableName: "transactions",
    timestamps: true,
    underscored: true,
  };

  class Transaction extends Model {
    static associate(db) {
      db.Transaction.belongsTo(db.Type);
      db.Transaction.belongsTo(db.Marketplace, {
        as: "marketplace",
      });
    }
  }

  Transaction.init(
    {
      id: {
        type: DataTypes.UUID,
        primaryKey: true,
        defaultValue: Sequelize.UUIDV4,
      },
      row_name: { type: DataTypes.STRING },
      amount: { type: DataTypes.CHAR },
      currency: { type: DataTypes.STRING },
      date: { type: DataTypes.DATE },
      row_data: { type: DataTypes.TEXT },
    },
    options
  );

  return Transaction;
};
