const { configureApp } = require("./app");
const { getParams } = require("./lib/DBParams");
const { connectToDB } = require("./lib/DBConnect");

let pool;
let database;

if (!database) {
  console.log("Fetching DB params");
  database = getParams();
}

if (!pool) {
  console.log("Initializing DB");
  pool = connectToDB(params);
}

configureApp(pool);
