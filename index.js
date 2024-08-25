const jsonServer = require("json-server"); // importing json-server library
const server = jsonServer.create();
const router = jsonServer.router("db.json");
const middlewares = jsonServer.defaults();
const port = process.env.PORT || 5001; //  choose port from here

server.use(middlewares);
server.use(router);

server.listen(port);
