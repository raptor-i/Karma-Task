import client from "../client/client";

const getUsers = async () => {
  const response = await client.get("/getAllUsers").then((res) => {
    return res;
  });

  return response;
};

export default { getUsers };
