// import { deliverMessage } from "./deliver-message";
// const { deliverMessage } = require("deliver-message.js");
const express = require("express");
const app = express();
const http = require("http");

const cors = require("cors");
const { Server } = require("socket.io");
const { ioConnect } = require("./socket-io");

app.use(cors);

const server = http.createServer(app);

const io = new Server(server, {
  cors: { origin: "http://localhost:3000", method: ["GET", "POST"] },
});

io.on("connection", (socket) => {
  ioConnect(socket);
});

server.listen(3001, () => {
  console.log("server is running");
});
