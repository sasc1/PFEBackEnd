/**
 * Created by sasc on 27.10.14.
 * returns all polls specified in req.body.list. expiration date is factored in. Only regions in req.body.regions are considered.
 */

module.exports = function (req, res, next) {

    var models = require("../../models/models");
    models.polls.find({
        _id: {$in: req.body.list},
        expdate: {$gte: new Date()},
        region: {$in: req.body.regions}
    }, function (err, polls) {
        if (err)
            return next(err);
        res.json(polls);
    });

};

