import { buscarAdvogadoPorId, ListarAreas, ListarClientes, buscarConsultoriaPorId, buscarId, buscarIdAdvogado, buscarIdAdvogado2 } from "../repository/areaRepository.js";

import { Router } from "express";
const server = Router();


server.get('/advogado/listarareas', async (req, resp) => {
    try {
        const linhas = await ListarAreas();
        resp.send(linhas);
    }
    catch (err) {
        resp.status(400).send({
            erro: err.message
        })
    }
})

server.get('/advogado/listaradvogadosid/:id', async (req, resp) => {
    try {
        const id = Number(req.params.id);
        
        const resposta = await buscarAdvogadoPorId(id)
        if(!resposta){
            resp.status(404).send('Nenhuma comanda correspondente foi encontrada')
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

server.get('/advogado/listarclientes', async (req, resp) => {
    try {
        const linhas = await ListarClientes();
        resp.send(linhas);
    }
    catch (err) {
        resp.status(400).send({
            erro: err.message
        })
    }
})

server.get('/advogado/listarconsultoriasid/:id', async (req, resp) => {
    try {
        const id = Number(req.params.id);
        
        const resposta = await buscarConsultoriaPorId(id)
        if(!resposta){
            resp.status(404).send('Nenhuma comanda correspondente foi encontrada')
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

server.get('/advogado/id/:id', async (req, resp) => {
    try {
        const id = Number(req.params.id);
        
        const resposta = await buscarId(id)
        if(!resposta){
            resp.status(404).send('Nenhuma comanda correspondente foi encontrada')
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

server.get('/advogado/advogadosid/:id', async (req, resp) => {
    try {
        const id = Number(req.params.id);
        
        const resposta = await buscarIdAdvogado(id)
        if(!resposta){
            resp.status(404).send('Não foi possível localizar esse advogado')
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
server.get('/advogado/advogadosid/:id', async (req, resp) => {
    try {
        const id = Number(req.params.id);
        
        const resposta = await buscarIdAdvogado(id)
        if(!resposta){
            resp.status(404).send('Não foi possível localizar esse advogado')
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

server.get('/advogado/advogadosid2/:id', async (req, resp) => {
    try {
        const id = Number(req.params.id);
        
        const resposta = await buscarIdAdvogado2(id)
        if(!resposta){
            resp.status(404).send('Não foi possível localizar esse advogado')
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