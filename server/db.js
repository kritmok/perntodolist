const Pool = require("pg").Pool;

const pool = new Pool({
    user: "input",
    password: "input",
    database: "input",
    host: "localhost",
    port: 5432
});

module.exports = pool;