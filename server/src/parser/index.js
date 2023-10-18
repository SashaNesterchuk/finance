const testFolder = "./excel/";
const fs = require("fs");
const xlsx = require("node-xlsx");
const { v4: uuidv4 } = require("uuid");

module.exports = function (transactions, marketplaces) {
  const createTransactions = [];
  fs.readdirSync(testFolder).forEach((file) => {
    const workSheetsFromFile = xlsx.parse(
      `/Users/sashanesterchuk/projects/finance/server/excel/${file}`
    );

    // const hashMapTransactions = [];

    // for (let i = 1; i < transactions.length; i++) {
    // hashMapTransactions.push(transactions[i].row_name);
    // }

    for (let i = 1; i < workSheetsFromFile[0].data.length; i++) {
      const el = workSheetsFromFile[0].data[i];

      const matchAddress = el[12].match("Adres :(.*)Miasto");

      const transactionPlace =
        matchAddress && matchAddress[1] ? matchAddress[1].trim() : el[12];

      const date = new Date(el[1]);
      const transactionExist = transactions.find(
        (t) => t.row_data === el.toString()
      );

      const findMarket = marketplaces.find((el) => {
        const name = el.name.toLowerCase();
        const transactionName = transactionPlace.toLowerCase();
        if (new RegExp(name).test(transactionName)) {
          return true;
        }
        return false;
      });

      if (transactionExist) {
        continue;
      } else {
        createTransactions.push({
          id: uuidv4(),
          row_name: transactionPlace,
          amount: el[3],
          currency: el[4],
          date: new Date(date).toISOString().slice(0, 19).replace("T", " "),
          row_data: el.toString(),
          marketplace_id: findMarket?.id || null,
          created_at: new Date().toISOString().slice(0, 19).replace("T", " "),
          updated_at: new Date().toISOString().slice(0, 19).replace("T", " "),
        });
      }
    }
  });

  return createTransactions;
};
