const express = require("express");
const signupRouter = require("./router/signupRouter");
const loginRouter = require("./router/loginRouter");

const errorHandler = require("./utils/errorHandler");

const app = express();
app.use(express.json());

app.use("/api", signupRouter);
app.use("/api", loginRouter);

app.use((_req, res) => {
  res.status(404).send({ message: "invalid path" });
});

app.use(errorHandler);

app.listen(4000, () => {
  console.log("Server started on port 4000");
});
