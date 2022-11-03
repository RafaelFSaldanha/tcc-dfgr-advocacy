import { io } from "./socket";
import { CriarChat, ClienteChat, AdvogadoChat  } from "../repository/ChatRepository.js";
import { listarMensagens, ClienteEnviarMensagem, AdvogadoEnviarMensagem } from '../controller/MensagensController.js'

io.on("connection", (socket) => {
  socket.on("Cliente_enviarMensagem", async (data) => {
    const r = await ClienteEnviarMensagem(data.idChat, data.idCliente, data.mensagem);
  });
  
  socket.on("Advogado_enviarMensagem", async (data) => {
    const r = await AdvogadoEnviarMensagem(data.idChat, data.idAdvogado, data.mensagem);
  });

  socket.on("receberMensagem", async (data) => {
    const r = await listarMensagens(data.idChat);
  });
});