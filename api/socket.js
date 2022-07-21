import io from "socket.io-client";

const getSocket = () => {
  return io("http://10.0.2.2:9000");
};

export default { getSocket };
