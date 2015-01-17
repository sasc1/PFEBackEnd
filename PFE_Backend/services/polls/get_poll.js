/**
 * Service which returns a poll in JSON format.
 * The POST request must contain the pollid.
 * @param req
 * @param res
 */
module.exports = function (req, res, next) {

    var models = require("../../models/models");

    models.polls.findOne({_id: req.body.pollid}, function (err, poll) {
        if (err)
            return next(err);
        res.json(poll);
    });

};
