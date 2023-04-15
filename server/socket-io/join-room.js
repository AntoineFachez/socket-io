function joinRoom(socket, room, users, roomMembers) {
  users.message = "hello world";
  socket.join(room, (room) => socket.join(room));
  // console.log(`User room: ${room}, id: ${socket.id}`);
  // socket.emit("msgFromServer", "server sent message");
  socket.to(room).emit(`msg_from_server`, users);
  for (let i = 0; i < users.length; i++) {
    roomMembers.push(users[i]);
  }
  //   roomMembers.pop();
  socket.broadcast.emit("msg_from_server", users);
  return roomMembers;
}
module.exports = { joinRoom };
