import { Router } from 'express';

import { LoginAdvogado } from '../repository/AdvogadoRepository.js';

const server = Router();

server.post('/advogado/login', async (req, resp) => {
    try{
        const {email, senha} = req.body;
        const resposta = await LoginAdvogado(email,senha)
        if(!email || !senha){
            resp.status(401).send({
                erro: 'Credencias Inválidas'
        })
        
        }
        resp.send(resposta)
    }
    catch(err){
        resp.status(401).send({
            erro: err.message
        })

    }
})

server.post('/advogado/agendar', async (req, resp) => {
    try{

    }
    catch(err){
        resp.status(401).send({
            erro: err.message
        })
    }
})
export default server;