const express = require("express");
const cors = require("cors");
const db = require("./src/database/");
const port = 3000;

db.sequelize.sync({ alter: true });
const app = express();
app.use(express.json({ extended: true }));

const routes = {
  transactions: require("./src/routes/transactions"),
  budgets: require("./src/routes/budgets"),
  types: require("./src/routes/types"),
  marketplaces: require("./src/routes/marketplaces"),
};

app.use(cors());

app.get("/", (req, res) => {
  res("success");
});

app.get("/api/transactions", async (req, res) => {
  const transactions = await db.Transaction.findAll();
  res.send(transactions);
});

// We create a wrapper to workaround async errors not being transmitted correctly.
function makeHandlerAwareOfAsyncErrors(handler) {
  return async function (req, res, next) {
    try {
      await handler(req, res);
    } catch (error) {
      next(error);
    }
  };
}

// We define the standard REST APIs for each route (if they exist).
for (const [routeName, routeController] of Object.entries(routes)) {
  if (routeController.getAll) {
    app.get(
      `/api/${routeName}`,
      makeHandlerAwareOfAsyncErrors(routeController.getAll)
    );
  }
  if (routeController.getById) {
    app.get(
      `/api/${routeName}/:id`,
      makeHandlerAwareOfAsyncErrors(routeController.getById)
    );
  }
  if (routeController.create) {
    app.post(
      `/api/${routeName}`,
      makeHandlerAwareOfAsyncErrors(routeController.create)
    );
  }
  if (routeController.update) {
    app.put(
      `/api/${routeName}/:id`,
      makeHandlerAwareOfAsyncErrors(routeController.update)
    );
  }
  if (routeController.remove) {
    app.delete(
      `/api/${routeName}/:id`,
      makeHandlerAwareOfAsyncErrors(routeController.remove)
    );
  }
}

app.get("/api/transactions/:month/:year", (req, res) => {
  db.Transaction.findAll({
    where: {
      [db.Sequelize.Op.and]: [
        db.Sequelize.where(
          db.Sequelize.fn("MONTH", db.Sequelize.col("date")),
          req.params.month
        ),
        db.Sequelize.where(
          db.Sequelize.fn("YEAR", db.Sequelize.col("date")),
          req.params.year
        ),
      ],
    },
    order: ["date"],
  }).then((events) => {
    if (events) {
      res.status(200).send(events);
    } else {
      res.status(400).send({
        message: "without events",
      });
    }
  });
});

app.get("/api/budgets/:month/:year", (req, res) => {
  db.Budget.findAll({
    where: {
      [db.Sequelize.Op.and]: [
        db.Sequelize.where(
          db.Sequelize.fn("MONTH", db.Sequelize.col("start_date")),
          req.params.month
        ),
        db.Sequelize.where(
          db.Sequelize.fn("YEAR", db.Sequelize.col("start_date")),
          req.params.year
        ),
      ],
    },
    include: [
      {
        model: db.Type,
        as: "types",
      },
    ],
    order: ["start_date"],
  }).then((events) => {
    if (events) {
      res.status(200).send(events);
    } else {
      res.status(400).send({
        message: "without events",
      });
    }
  });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
  console.log("Paths are listening ");
  console.log(app._router.stack.map((it) => it.route?.path).toString());
});
