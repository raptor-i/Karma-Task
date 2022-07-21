const fs = require("fs");

const readFile = () => {
  try {
    var data = fs.readFileSync("./users/UserList.json", "utf8");
    return JSON.parse(data);
  } catch (error) {
    console.log("An error occured while reading file : ", error);
  }
};

const writeFile = (data) => {
  try {
    fs.writeFileSync("./users/UserList.json", JSON.stringify(data));
  } catch (error) {
    console.log("An error occured while writing file : ", error);
  }
};

const getAll = async () => {
  return readFile();
};

const addUser = (userData) => {
  const allUsers = readFile();
  userData.id = Object.keys(allUsers).length;
  allUsers.push(userData);
  writeFile(allUsers);
  const allUsers2 = readFile();
  console.log(allUsers2);
};

const getUser = (nickname) => {
  const users = readFile();
  return users.filter((usr) => usr.nickname === nickname);
};

module.exports = {
  getAll,
  addUser,
  getUser,
};
