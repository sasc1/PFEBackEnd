/**
 * All mongoose models are here defined.
 * There is no need to put them in separate files yet.
 * This way you can get the models pretty quick and use them with:
 *            var models = require("../../models/models");
 *            models.polls.find({});
 */

var db = global.db;

var mongoose = require("mongoose");

// authors model
var authorsSchema = new mongoose.Schema({
    _id: Number,
    name: String
});
exports.authors = db.model("authors", authorsSchema);

// choices model
var choiceSchema = new mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    label: {en: String, de: String},
    count: Number
});
exports.choices = db.model("choices", choiceSchema);

// categories model
var categoriesSchema = new mongoose.Schema({
    _id: Number,
    entries: [{
        label: {en: String, de: String},
        associated_polls: [{type: Number, ref: "polls"}],
        subcategorie: {type: Number, ref: "categories"}
    }],
    highlighted: Number,
    iconnumber: Number,
    url: String
});
exports.categories = db.model("categories", categoriesSchema);

// votes model
var votesSchema = new mongoose.Schema({
    pollid: Number,
    fp: String,
    choiceid: mongoose.Schema.Types.ObjectId,
    created: Date
});
exports.votes = db.model("votes", votesSchema);