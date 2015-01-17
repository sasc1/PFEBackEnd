/**
 * Service which returns all polls in JSON format.
 * @param req
 * @param res
 */
module.exports = function (req, res, next) {

    var models = require("../../models/models");

    models.polls.find({region: {$in: req.body.regions}}).populate("author").exec(function (err, polls) {
        if (err)
            return next(err);
        res.json(polls);
    });

};