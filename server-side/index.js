const { dateFormatter } = require("./util/dateFormatter");
const { validation, createHash } = require("./auth/hashing");
const express = require("express");
const app = express();
const http = require("http");
const server = http.createServer(app);
const { Server } = require("socket.io");
const users = require("./users/users");
const { getUserData } = require("./util/getUserData");

const io = new Server(server);

io.on("connection", (socket) => {
  console.log("a user connected :" + socket.id);

  socket.on("join_room", (data) => {
    console.log("joined to :" + data.room);
    socket.join(data.room);
  });

  socket.on("Send_Request", (data) => {
    console.log("Request sent to :", data.room);
    console.log(data.Data);
    socket.to(" " + data.room).emit("receive_req", data.Data);
  });
});

app.use(express.static("public"));
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Connected");
});

app.post("/api/auth", async (req, res) => {
  const { nickname, password } = req.body;
  const data = await validation(nickname, password);
  res.send(data);
});

app.post("/api/register", async (req, res) => {
  const data = req.body;
  console.log(data);
  const password = await createHash(data.password);
  data.birthday = await dateFormatter(data.birthday);
  data.password = password;
  users.addUser(data);
  res.send("Account registered.");
});

app.get("/api/getAllUsers", async (req, res) => {
  const data = await users.getAll();

  res.send(data);
});

app.post("/api/getUserData", async (req, res) => {
  const { nickname } = req.body;
  const data = await getUserData(nickname);
  console.log(data);
  res.send(data);
});

const Port = 9000;
server.listen(Port, function () {
  console.log(`Server started on port ${Port}...`);
});
