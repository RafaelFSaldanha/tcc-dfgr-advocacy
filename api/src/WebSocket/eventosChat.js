import { io } from "./socket";
import { listarMensagens, EnviarMensagem } from '../controller/MensagensController.js'

io.on("connection", async (socket) => {
  socket.on("enviarMensagem", async (data) => {
    const r = await EnviarMensagem(data.tipo, data.contatoId, data.mensagem, data.IdEnvio)
  })

  socket.on("receberMensagem", async (data) => {
    const r = await listarMensagens(data.contatoId)
    socket.emit("receberMensagem", r)
  })
});