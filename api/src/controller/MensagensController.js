import { Router } from "express";
import { listarMensagens, EnviarMensagens} from "../repository/MensagensRepository.js";

const server = Router()

server.get('/mensagens', async (req, resp) => {
	try {
		const { chat } = req.query;
		const r = await listarMensagens(Number(chat));
        resp.send(r)
	} 
    catch (err) {
		resp.send({
			erro: err.message,
		});
	}
});

server.post('/mensagens', async (req, resp) => {
    try {
        const { chat, tipo, idEnvio} = req.query
        const { mensagem } = req.body;
        const r = await EnviarMensagens(tipo, chat, mensagem, idEnvio)
        resp.sendStatus(200);
       
    } 
	catch (err) {
        resp.status(401).send({
            erro: err.message
        })
    }
});
export default server;