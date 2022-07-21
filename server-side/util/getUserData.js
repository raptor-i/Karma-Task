const getUser = require("../users/users");

const getUserData = async (nickname) => {
  return await getUser.getUser(nickname);
};

module.exports = { getUserData };
