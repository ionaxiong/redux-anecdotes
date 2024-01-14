const jsonServer = require("json-server");

const server = jsonServer.create();

const router = jsonServer.router("db.json");

const middlewares = jsonServer.defaults({
  static: "./dist",
});

server.use(middlewares);

server.use(router);

// server.use("/health", (req, res) => {
//   res.send("OK");
// });

server.listen(process.env.PORT || 3001, () => {
  console.log("JSON Server is running");
});
