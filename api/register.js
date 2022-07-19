import client from "../client/client";

const register = async (data) => {
  const response = await client
    .post("/register", data)
    .then((res) => console.log(res.data));
};

export default { register };
