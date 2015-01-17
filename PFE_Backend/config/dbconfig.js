/**
 * Exports DB configuration.
 * @type {{url: string}} url for DB
 */
module.exports = {
    url: "mongodb://andi:andi0123@localhost:27017/yvotedb",
    urlprod: process.env.OPENSHIFT_MONGODB_DB_URL + "yvote"
};