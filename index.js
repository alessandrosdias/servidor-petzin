constjsonServer = require("json-server");
constserver = jsonServer.create("db.json");
constrouter = jsonServer.router("db.json");
constmiddlewares = jsonServer.defaults();
const port = process.env.PORT || 8080;

server.use(middlewares);
server.use(router);

server.listen(port);
