const knex = require("knex")({
  client: "mysql", //this is the one we installed!!
  connection: {
    host: "localhost",
    port: 3306,
    user: "root",
    password: "rootpass",
    database: "friends",
  },
});

export default knex;

var NestHydrationJS = require("nesthydrationjs")();
export const nest = NestHydrationJS.nest;
