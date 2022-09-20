const {HOST_DB, PORT_DB, USER_DB, PASS_DB, DATABASE} = require("dotenv").config().parsed;

const { Client } = require("pg");

const client = new Client({

    host: HOST_DB,
    port: PORT_DB,
    user: USER_DB,
    password: PASS_DB,
    database: DATABASE
});



client
.connect()
    .then(() => { console.log(" Postgres Connected ")})
    .catch((err) => { console.log(" Connection failed with code ", err.code)
 });

 module.exports = client;


/*
          PROMISSE
             |
         <pending>
            / \
    rejected   Revolve
    .cath()    .then()

*/