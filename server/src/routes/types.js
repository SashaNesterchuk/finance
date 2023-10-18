const db = require("../database");
const { getIdParam } = require("../helpers");

async function getAll(req, res) {
  const data = await db.Type.findAll({
    // include: [
    //   {
    //     model: db.Marketplace,
    //     as: "marketplaces",
    //   },
    // ],
  });
  res.status(200).json(data);
}

async function getById(req, res) {
  const id = getIdParam(req);
  const data = await db.Type.findByPk(id);
  if (data) {
    res.status(200).json(data);
  } else {
    res.status(404).send("404 - Not found");
  }
}

async function create(req, res) {}

async function update(req, res) {}

async function remove(req, res) {}

module.exports = {
  getAll,
  getById,
  create,
  update,
  remove,
};
