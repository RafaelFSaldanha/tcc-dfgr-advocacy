import { Router } from "express";
import { CriarChat, ClienteChat, AdvogadoChat, ListarClientesChat, ValidaçãoChat } from "../repository/ChatRepository.js";

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
        if (!idCliente) {
            idCliente== " "
        }

		if (idAdvogado && !idCliente) {
            const r = await AdvogadoChat(Number(idAdvogado));
            if (!r || r == undefined) {
                throw new Error("Nenhum cliente criou uma conversa com você ainda.")
            }
            else {
                resp.send(r);
            }
			
		} 
        else if (idCliente && !idAdvogado) {
            const r = await ClienteChat(Number(idCliente));
            if (!r || r == undefined) {
                throw new Error("Você não tem nenhuma conversa.")
            }
            else {
                resp.send(r);
            }
			
        }
    
    } 
    catch (err) {
        resp.status(401).send({
            erro: err.message
        })
    }
});

server.get('/advogado/chat', async (req, resp) => {
    try {
        const { idChat } = req.query;
        
        const resposta = await ListarClientesChat(idChat) 
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

server.get('/chat/validar', async (req, resp) => {
    try {
        const { idCliente, idAdvogado } = req.query;
        
        const resposta = await ValidaçãoChat(idCliente, idAdvogado) 
       if(!resposta) {
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