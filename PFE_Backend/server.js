// modules =================================================
"use strict";
var express = require("express");
var app = express();
var mongoose = require("mongoose");
var bodyParser = require("body-parser");
//var methodOverride = require("method-override");
var dbconfig = require("./config/dbconfig");
var db = mongoose.connection;
// make available in all moduls
global.db = db;

if (process.env.OPENSHIFT_NODEJS_IP === void 0) {
    mongoose.connect(dbconfig.url);
}
else {
    mongoose.connect(dbconfig.urlprod);
}
//mongoose.set('debug', true);
// if connection is successful

db.on("connected", function (ref) {
    console.log("Connected to DB yvotedb");

    var port = process.env.OPENSHIFT_NODEJS_PORT || 8080; // set our port
    var ip = process.env.OPENSHIFT_NODEJS_IP || "127.0.0.1";

    var decode = require("./services/general/EncryptApi").decode;

    // get all data/stuff of the body (POST) parameters
    app.use(bodyParser.json()); // parse application/json
    app.use(bodyParser.json({
        type: "application/vnd.api+json"
    })); // parse application/vnd.api+json as json
    app.use(bodyParser.urlencoded({
        extended: true
    })); // parse application/x-www-form-urlencoded

    //	app.use(methodOverride("X-HTTP-Method-Override"));

    /* app.use(function (req, res, next) {
     if (req.url.indexOf("/1crk") != -1) {
     // url contains encoded api call
     req.url = decode(req.url);
     }
     next();
     });
     */

    // activate CORS for server
    app.use(function (req, res, next) {
        res.header("Access-Control-Allow-Origin", "*");
        res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
        next();
    });

    //app.use(express.static(__dirname + "/public"));

    //
    //	/// catch 404 and forwarding to error handler
    //	app.use(function(req, res, next) {
    //	    var err = new Error("Not Found");
    //	    err.status = 404;
    //	    next(err);
    //	});
    //
    //	/// error handlers
    //
    //	// development error handler
    //	// will print stacktrace
    //	if (app.get("env") === "development") {
    //	    app.use(function(err, req, res, next) {
    //	        res.status(err.status || 500);
    //	        res.render("error", {
    //	            message: err.message,
    //	            error: err
    //	        });
    //	    });
    //	}
    //
    //	// production error handler
    //	// no stacktraces leaked to user
    //	app.use(function(err, req, res, next) {
    //	    res.status(err.status || 500);
    //	    res.render("error", {
    //	        message: err.message,
    //	        error: {}
    //	    });
    //	});
    //	

    // routes ==================================================
    require("./routes")(app); // configure our routes

    // start app ===============================================
    app.listen(port, ip, function () {
        console.log("Server started on http://" + ip + ":" + port);
    });

});

// If the connection throws an error
db.on("error", function (err) {
    console.error("Failed to connect to DB yvotedb on startup ", err);
});

// When the connection is disconnected
db.on("disconnected", function () {
    console.log("Mongoose default connection to DB yvotedb disconnected");
});

var gracefulExit = function () {
    db
        .close(function () {
            console
                .log("Mongoose default connection with DB yvotedb is disconnected through app termination");
            process.exit(0);
        });
};

// If the Node process ends, close the Mongoose connection
process.on("SIGINT", gracefulExit).on("SIGTERM", gracefulExit);