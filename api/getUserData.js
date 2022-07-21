import client from "../client/client";

const getUserData = async (nickname) => {
  const response = await client
    .post("/getUserData", { nickname })
    .then((res) => {
      return res;
    });
  return response;
};

export default { getUserData };
