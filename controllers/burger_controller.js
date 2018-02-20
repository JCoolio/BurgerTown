
var express = require('express');
var router = express.Router();

var db = require('../models');

router.get('/', function (req, res) {
    db.Burger.findAll({
        order: 'burger_name ASC',
        include: [
            {model: db.Customer, required: false}
        ]
    }).then(function (data) {
        var hbsObject = {
            burgers: data
        };
        res.render('index', hbsObject);
    });
});

router.post('/api/new/burger', function (req, res) {
    var burgerName = req.body.name;
    db.Burger.create({
        burger_name: burgerName
    }).then(function () {
        res.redirect('/');
    });
});

router.put('/api/new/customer/:id', function(req, res) {
    var customerName = req.body.customer_name;
    db.Customer.create({
        customer_name: customerName
    }).then(function(data) {
        var devoured = true;
        var ID = req.params.id;

        db.Burger.update({
            devoured: devoured,
            CustomerId: data.id},
            {where: {id: ID}}
        ).then(function() {
            res.redirect('/');
        });
    });
});

router.put('/:id', function (req, res) {
    var devoured = false;
    var ID = req.params.id;

    db.Burger.update(
        {devoured: devoured,
        CustomerId: null},
        {where: {id: ID}}
    ).then(function () {
        res.redirect('/');
    });
});

module.exports = router;