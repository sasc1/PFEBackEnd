/**
 * Exports DB configuration.
 * @type {{url: string}} url for DB
 */
module.exports = {
    url: "mongodb://pfeuser:BBr45M!2@localhost:27017/pfedb",
    urlprod: process.env.OPENSHIFT_MONGODB_DB_URL + "pfedb"
};