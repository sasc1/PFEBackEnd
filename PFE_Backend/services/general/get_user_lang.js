/**
 * Created by sasc on 04.11.14.
 * Gets user language preference from request header and sends it to client.
 */
module.exports = function (req, res, next) {

    var langString = req.headers["accept-language"];
    if (langString != void 0) {
        var langs = langString.split(",");
        if (langs.length > 0)
            res.json({lang: langs[0]});
        else
            res.end("no lang found");
    }
    else
        res.end("no lang found");
};