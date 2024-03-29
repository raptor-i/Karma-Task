import client from "../client/client";

const login = async (nickname, password) => {
  const response = await client
    .post("/auth", { nickname, password })
    .then((res) => {
      return res;
    });
  return response;
};

export default { login };
