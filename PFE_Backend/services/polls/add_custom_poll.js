/**
 * Adds a user custom poll, only if user has voted x times. Custom question is in req.body.custom_poll, fingerprint of user is in req.body.fp
 * @param req
 * @param res
 */
module.exports = function (req, res, next) {

    var models = require("../../models/models");
    var mongoose = require("mongoose");

    models.polls.findOne({_id: 14}, function (err, poll) {
        if (err)
            return next(err);
        if (req.body.custom_poll && req.body.custom_poll.length > 0) {
            poll.choices.push({
                _id: new mongoose.Types.ObjectId, label: {en: req.body.custom_poll, de: req.body.custom_poll},
                count: 0
            });
            poll.save(function (err) {
                if (err) {
                    return next(err);
                } else {
                    res.end("add_custom_poll: custom user poll persisted.");
                }
            });
        } else {
            res.end("add_custom_poll: error, custom user poll not persisted.");
        }
    });

};