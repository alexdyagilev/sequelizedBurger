
var express = require("express");

var orm = require("../config/orm");

module.exports = function (app) {
    app.get("/", function (req, res) {
        orm.selectAll(function (data) {
            res.render("index", {result: data});
        });
    });

    app.put("/add", function (req, res) {
        console.log(req.body);
        var date = new Date();
        orm.insertOne(req.body.burger_name, true, date);
        res.redirect("/");
    });

    app.put("/:id", function (req, res) {
        console.log(req.params.id);
        orm.updateOne(req.params.id);
        res.redirect("/");
    });
};


