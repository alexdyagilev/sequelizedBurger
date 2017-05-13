
var Character = require("../models/burger.js");

// Routes
// =============================================================
module.exports = function(app) {

  app.get("/api/:burger?", function(req, res) {

    if (req.params.characters) {

      Burger.findOne({
        where: {
          routeName: req.params.characters
        }
      }).then(function(result) {
        return res.json(result);
      });
    }

    else {

      Burger.findAll({})
        .then(function(result) {
          return res.json(result);
        });
    }

  });

  app.post("/api/new", function(req, res) {

    var burger = req.body;

    var routeName = burger.name.replace(/\s+/g, "").toLowerCase();

    Burger.create({
      routeName: routeName,
      name: burger.name,
      devoured: burger.devoured,
    });

  });
};
