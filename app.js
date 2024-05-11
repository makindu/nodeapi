const express = require("express");
const DBConnection = require("./db.provider");
const cors = require('cors');

const app = express();
app.use(cors);

const http = require("http");
const UserSocket = require("./src/users/user.socket");

const server = http.createServer(app);
const IO = require("socket.io")(server);

IO.on("connection", (socket) => {
  socket.emit("welcome", { message: "Welcome to my api" });
  UserSocket(socket);
  console.log("new user connected");
});

app.use(express.json());
app.use("/api", require("./index.route"));

DBConnection.connection.sync().then(() => {
  console.log("database connected");
});

server.listen(process.env.PORT || 3000, () => {
  console.log("server running on port 10000");
});
