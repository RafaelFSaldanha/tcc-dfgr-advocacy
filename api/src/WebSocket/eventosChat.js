import { io } from "./socket.js";
import { listarMensagens, EnviarMensagens } from '../repository/MensagensRepository.js'

io.on("connection", async (socket) => {

  socket.on("send_message", async (data) => {
    const r = await EnviarMensagens(data.tipo, data.idChat, data.mensagem, data.idEnvio)
  })

  socket.on("receive_message", async (data) => {
    const r = await listarMensagens(data.idChat)
    socket.emit("receive_message", r)
  })
});