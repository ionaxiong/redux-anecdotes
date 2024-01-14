const jsonServer = require("json-server");

const server = jsonServer.create();

const router = jsonServer.router("db.json");

const middlewares = jsonServer.defaults({
  static: "./dist",
});

server.use(middlewares);

server.use(router);

server.get("/api/anecdotes/:id", (req, res) => {
  const id = req.params.id;
  const anecdote = router.db
    .get("anecdotes")
    .find({ id: id })
    .value();
  res.send(anecdote);
});

server.put("/api/anecdotes/:id", (req, res) => {
  const id = req.params.id;
  const anecdote = router.db
    .get("anecdotes")
    .find({ id: id })
    .value();
  anecdote.votes = anecdote.votes + 1;
  router.db
    .get("anecdotes")
    .find({ id: id })
    .assign(anecdote)
    .write();
  res.send(anecdote);
});

server.listen(process.env.PORT || 3001, () => {
  console.log("JSON Server is running");
});
