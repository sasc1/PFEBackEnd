/**
 * Service which increments the counter of a choice belonging to a certain poll.
 * The POST request must contain the pollid and the choiceid.
 * @param req
 * @param res
 */
module.exports = function (req, res, next) {

    var models = require("../../models/models");

    // has user already voted ? lookup in votes
    models.votes.findOne({pollid: req.body.pollid, fp: req.body.fp}, function (err, poll) {
        if (err) {
            return next(err);
        }
        else if (!poll) {
            // nothing found, user did not vote before

            models.polls.findOne({_id: req.body.pollid}, function (err, poll) {
                if (err) {
                    return next(err);
                }
                else {
                    poll.choices.id(req.body.choiceid).count++;
                    poll.save(function (err) {
                        if (err) {
                            return next(err);
                        } else {
                            // save user vote
                            var vote = new models.votes({
                                pollid: req.body.pollid,
                                choiceid: req.body.choiceid,
                                fp: req.body.fp,
                                created: new Date()
                            });
                            vote.save(function (err) {
                                if (err) {
                                    return next(err);
                                } else {
                                    res.end("save_choice: choice persisted.");
                                }
                            });
                        }
                    });
                }
            });

        } else {
            // user did vote before, do not save
            res.end("save_choice: user has already voted.")
        }

    });

};
