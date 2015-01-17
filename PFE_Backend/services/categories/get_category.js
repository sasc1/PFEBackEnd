/**
 * Created by sasc on 15.10.14.
 * Returns a categorie. The request must have categorie_id set.
 */

module.exports = function (req, res, next) {
    var models = require("../../models/models");
    models.categories.findOne({_id: req.body.categorie_id}, function (err, categorie) {
        if (err)
            return next(err);
        res.json(categorie);
    });
};

