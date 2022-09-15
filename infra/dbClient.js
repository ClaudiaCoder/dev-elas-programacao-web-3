const env = require("dotenv").config().parsed;

const { Client } = require("pg");

const client = new Client({

    host: env.HOST_DB,
    port: env.PORT_DB,
    user: env.USER_DB,
    password: env.PASS_DB,
    database: env.DATABASE
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