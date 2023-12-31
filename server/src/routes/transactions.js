const db = require("../database");
const { getIdParam } = require("../helpers");

async function getAll(req, res) {
  const data = await db.Transaction.findAll({
    include: [
      {
        model: db.Marketplace,
        as: "marketplace",
      },
    ],
  });
  res.status(200).json(data);
}

async function getById(req, res) {
  const id = getIdParam(req);
  const data = await db.Transaction.findByPk(id);
  if (data) {
    res.status(200).json(data);
  } else {
    res.status(404).send("404 - Not found");
  }
}

async function create(req, res) {
  if (req.body.id) {
    res
      .status(400)
      .send(
        `Bad request: ID should not be provided, since it is determined automatically by the database.`
      );
  } else {
    await db.Transaction.create(req.body);
    res.status(201).end();
  }
}

async function update(req, res) {
  const id = getIdParam(req);

  // We only accept an UPDATE request if the `:id` param matches the body `id`
  if (req.body.id === id) {
    await db.Transaction.update(req.body, {
      where: {
        id: id,
      },
    });
    res.status(200).end();
  } else {
    res
      .status(400)
      .send(
        `Bad request: param ID (${id}) does not match body ID (${req.body.id}).`
      );
  }
}

async function remove(req, res) {
  const id = getIdParam(req);
  await db.Transaction.destroy({
    where: {
      id: id,
    },
  });
  res.status(200).end();
}

module.exports = {
  getAll,
  getById,
  create,
  update,
  remove,
};
