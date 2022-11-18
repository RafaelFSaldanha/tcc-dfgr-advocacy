import { Router } from "express";

import { CriarChat, ClienteChat, AdvogadoChat, ListarClientesChat, isChatCreated } from "../repository/ChatRepository.js";


const server = Router();


server.post('/chat', async (req, resp) => {
    try {
        const { idAdvogado, idCliente } = req.body;
        const verif = await isChatCreated(idCliente, idAdvogado)
        if(!idCliente || !idAdvogado) {
            throw new Error('É necessário passar os dois parâmetros!')
        }
       if(verif.length > 0){
        throw new Error("Esta conversa já existe!")
       }
       else{
        const r = await CriarChat(idAdvogado, idCliente)
        resp.sendStatus(200)
       }
      
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

export default server;