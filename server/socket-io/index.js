const { mockData } = require("../../mockData");
const { joinRoom } = require("./join-room");
function ioConnect(socket) {
  let room = socket.id;
  let roomMembers = [];
  const userSocketId = socket.id;

  joinRoom(socket, room, mockData(room), roomMembers);
  console.log("roomMembers", roomMembers);

  socket.on("user_connected", (data) => {
    data.message = `hello user ${data.userId}`;

    socket.to(socket.id).emit(`msg_from_server`, roomMembers);
    socket.to(socket.id).emit(`msg_from_server`, data);
    // console.log(`UserIdApp ${data.userId} connected`);
  });
  socket.on("msg_from_client", (data) => {
    // console.log(
    //   `User ${data.userEmail} with ${socket.id} sent: ${data.message}`
    // );
    socket.broadcast.emit("msg_from_server", data);
  });
}

module.exports = { ioConnect };
