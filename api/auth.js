import config from "../client/config";
import client from "../client/client";

const login = async (nickname, password) => {
  const response = await client
    .post("/auth", { nickname, password })
    .then((res) => {
      console.log(res.data);
      return res.data;
    });
  return response;
};

export default { login };
