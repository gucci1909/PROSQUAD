import { Server } from "socket.io";
import QAs from "../../../models/socket";
import connectDb from "../../../middleware/db";

// console.log(Server);

const SocketHandler = (req, res) => {
  if (res.socket.server.io) {
    console.log("Socket is already running");
    const io = new Server(res.socket.server);
    res.socket.server.io = io;

    io.on("connection", (socket) => {
      socket.on("join_room", (data) => {
        socket.join(data);
      });

      socket.on("send_message", async (data) => {
        const messages = new QAs({
          chat_id: data.room1,
          message: data.state,
        });
        const response = await messages.save();
        io.in(data.room1).emit("receive_message", data);
      });
    });
  } else {
    console.log("Socket is initializing");
    const io = new Server(res.socket.server);
    res.socket.server.io = io;
    io.on("connection", (socket) => {
      socket.on("join_room", (data) => {
        socket.join(data);
      });

      socket.on("send_message", async (data) => {
        console.log(data);
        const messages = new QAs({
          chat_id: data.room1,
          message: data.state,
        });
        const response = await messages.save();
        io.in(data.room1).emit("receive_message", data);
      });
    });
  }
  res.end();
};

export default connectDb(SocketHandler);
