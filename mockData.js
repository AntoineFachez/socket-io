const uuid = require("uuid");
function getUuid() {
  //   console.log(uuid());
  return uuid();
}
module.exports = { uuid };

function mockData(room) {
  users = [
    {
      component: "App",
      message: `welcome in ${room} of the server`,
      action: "deliver message",
      // userId: uuidv4(),
      userName: "admin",
      // roomMembers: roomMembers,
    },
    {
      component: "App",
      message: `welcome in ${room} of the server`,
      action: "deliver message",
      // userId: uuidv4(),
      userName: "anthony",
      // roomMembers: roomMembers,
    },
  ];
  return users;
}
module.exports = { getUuid, mockData };
