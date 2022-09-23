import { Router } from 'express';

import { LoginAdvogado, AgendarConsultoria, CadastroAdvogado } from '../repository/AdvogadoRepository.js';

const server = Router();

server.post('/advogado/login', async (req, resp) => {
    try {
        const { email, senha } = req.body;
        const resposta = await LoginAdvogado(email, senha)
        if (!resposta) {
            throw new Error('Email ou senha inválidos!')
        }
        if(resposta.length < 9)
        {
            throw new Error('Senha deve possuir 8 caracteres')
        }
        resp.send(resposta)
    }
    catch (err) {
        resp.status(401).send({
            erro: err.message
        })

    }
})

server.post('/advogado/admin/agendar', async (req, resp) => {
    try {
        const novaconsul = req.body;

        if (novaconsul.idAdvogado == 0) {
            throw new Error("Id admin nulo")
        }
        
        if (!novaconsul.area) {
            throw new Error("Selecione uma área")
        }
        
        if (!novaconsul.hora ) {
            throw new Error("Horário inválido")
        }
        
        if (!novaconsul.data) {
            throw new Error("Data inválida")
        }
        
        if (!novaconsul.descricao) {
            throw new Error("Insira uma descrição")
        }
        
    
        else{
        const consultoria = await AgendarConsultoria(novaconsul);
        resp.send(consultoria)
        }

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