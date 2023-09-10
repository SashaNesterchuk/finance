const testFolder = "./excel/";
const fs = require("fs");
const xlsx = require("node-xlsx");

module.exports = function () {
  const result = [];
  fs.readdirSync(testFolder).forEach((file) => {
    const workSheetsFromFile = xlsx.parse(
      `/Users/sashanesterchuk/projects/finance/server/excel/${file}`
    );

    for (let i = 1; i < workSheetsFromFile[0].data.length; i++) {
      const el = workSheetsFromFile[0].data[i];

      const matchAddress = el[12].match("Adres :(.*)Miasto");

      const transactionPlace =
        matchAddress && matchAddress[1] ? matchAddress[1].trim() : el[12];

      result.push({
        date: el[1],
        amount: el[3],
        currency: el[4],
        transactionPlace,
      });
    }
  });

  return result;
};
