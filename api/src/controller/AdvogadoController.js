import { Router } from 'express';

import { LoginAdvogado, AgendarConsultoria, CadastroAdvogado } from '../repository/AdvogadoRepository.js';

const server = Router();

server.post('/advogado/login', async (req, resp) => {
    try {
        const { email, senha } = req.body;
        const resposta = await LoginAdvogado(email, senha)
        if (!resposta) {

        resp.send(resposta)
    }}
    catch (err) {
        resp.status(401).send({
            erro: err.message
        })

    }
})

server.post('/advogado/agendar', async (req, resp) => {
    try {
        const novaconsul = req.body;
        const consultoria = await AgendarConsultoria(novaconsul);

        resp.send(consultoria)
    }
    catch (err) {
        resp.status(401).send({
            erro: err.message
        })
    }
})

server.post('/advogado/cadastro', async (req, resp) => {
    try {
        const novoadvo = req.body;
        const advogado = await CadastroAdvogado(novoadvo)

        resp.send(advogado)
    } catch (err) {
        console.log(err)
        resp.status(401).send({
            erro: err.message
        })
    }
})

export default server;