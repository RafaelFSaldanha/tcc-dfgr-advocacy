import { Router } from "express";
import { listarMensagens, ClienteEnviarMensagem, AdvogadoEnviarMensagem} from "../repository/MensagensRepository.js";

const server = Router()

server.get('/mensagens', async (req, resp) => {
	try {
		const { chat } = req.query;
		const r = await listarMensagens(chat);
		if(r.length <= 0) {
            throw new Error('Esta conversa não tem nenhuma mensagem ainda!')
        }
        else{
            resp.send(r);
        }
	} 
    catch (err) {
		resp.send({
			erro: err.message,
		});
	}
});

server.post('/mensagens/:chat', async (req, resp) => {
    try {
        const { chat } = req.params;
        const { idAdvogado, idCliente } = req.query
        const { mensagem } = req.body;

        if (idAdvogado && !idCliente) {
            const r = await AdvogadoEnviarMensagem(chat, idAdvogado, mensagem)
            resp.sendStatus(200)
        }
        else if (idCliente && !idAdvogado) {
            const r = await ClienteEnviarMensagem(chat, idCliente, mensagem)
            resp.sendStatus(200)
        }
    } 
	catch (err) {
        resp.status(401).send({
            erro: err.message
        })
    }
});
export default server;