const bcrypt = require("bcrypt");
const users = require("../users/users");

const delay = (time) => {
  return new Promise((resolve) => setTimeout(resolve, time));
};

const createHash = async (password) => {
  var hashedPass;
  bcrypt.hash(password, 10, function (err, result) {
    if (result) {
      hashedPass = result;
      console.log(result);
    }
  });

  await delay(400);
  return hashedPass;
};

const validation = async (nickname, password) => {
  const user = users.getUser(nickname);
  var isAuth = false;

  if (user.length == 0) {
    console.log("is user Authed : " + isAuth);
    return isAuth;
  }

  bcrypt.compare(password, user[0].password, function (err, result) {
    if (result) {
      console.log("is user Authed :" + result);
      isAuth = result;
      return result;
    }
  });

  // hash encrypt işlemi biraz uzun sürdüğünüden manuel timeout atadım.
  await delay(400);

  return isAuth;
};

module.exports = { validation, createHash };
