import { Router } from "express";
import { CriarChat, ClienteChat, AdvogadoChat, ListarClientesChat } from "../repository/ChatRepository.js";

const server = Router();


server.post('/chat', async (req, resp) => {
    try {
        const { idAdvogado, idCliente } = req.query;
        const r = await CriarChat(idAdvogado, idCliente)
        resp.sendStatus(200)
    }
    catch (err) {
        resp.status(401).send({
            erro: err.message
        })
    }
});

server.get('/chat', async (req, resp) => {
    try {
		const { idAdvogado, idCliente } = req.query;

		if (idAdvogado && !idCliente) {
            const r = await AdvogadoChat(idAdvogado);
            if (!r || r == undefined) {
                throw new Error("Nenhum cliente criou uma conversa com você ainda.")
            }
            else {
                resp.status(200).send;
            }
			
		} 
        else if (idCliente && !idAdvogado) {
            const r = await ClienteChat(idCliente);
            if (!r || r == undefined) {
                throw new Error("Você não tem nenhuma conversa.")
            }
            else {
                resp.status(200).send;
            }
			
        }
        else if (idCliente && idAdvogado) {
            throw new Error("Você não pode passar os 2 parâmetros ao mesmo tempo.")
        }
    } 
    catch (err) {
        resp.status(401).send({
            erro: err.message
        })
    }
});

server.get('/advogado/chat/:idAdvogado', async (req, resp) => {
    try {
        const { idAdvogado } = req.params;
        
        const resposta = await ListarClientesChat(idAdvogado) 
       if(resposta.length < 1) {
            throw new Error('Você não iniciou nenhuma conversa com um cliente ainda!')
       }
       else {
        resp.send(resposta)
       }
    }
    catch (err) {
        resp.status(400).send({
            erro: err.message
        })
    }
})

export default server;