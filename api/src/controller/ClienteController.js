import { Router } from 'express';
import multer from 'multer';
import { alterarimgcliente, buscarConsultoriaPorIdCliente, buscarIdCliente, CadastroCliente, ListarAssociados, LoginCliente, PesquisaAssociado } from '../repository/ClienteRepository.js';

const server = Router();
const upload = multer({dest: 'storage/FotoCliente'})


server.post('/cliente/cadastro', async (req,resp) => {
    try {
        const novocliente = req.body;
        
        if(!novocliente.nome){
            throw new Error("Insira um nome")
        }
        
        if(!novocliente.email){
            throw new Error("Insira um email")
        }
        
        if(!novocliente.senha){
            throw new Error("Insira uma senha")
        }
        
        const cliente = await CadastroCliente(novocliente)

        resp.send(cliente)

    } catch (err) {
        resp.status(401).send({
            erro: err.message
        })
        
    }
})

server.post('/login/cliente', async (req, resp) => {
    try {
        const { email, senha } = req.body;
        const resposta = await LoginCliente(email, senha)
        if (!resposta) {
            throw new Error('Email ou senha inválidos!')
        }
            
        resp.send(resposta)
    }
    catch (err) {
        resp.status(401).send({
            erro: err.message
        })

    }
})

server.put('/cliente/:id/foto', upload.single('foto')  ,async (req, resp) => {
    try {
        const { id } = req.params;
        const img = req.file.path;

        const resposta = await alterarimgcliente(img, id)
        if (resposta != 1) {
            throw new Error('A imagem não pode ser salva')
        }
        resp.status(204).send()
    } catch (err) {
        resp.status(400).send({
            erro:err.message
        })
    }
})

server.get('/listarassociados', async (req, resp) => {
    try {
        const resposta = await ListarAssociados()

        resp.send(resposta)
    }
    catch (err) {
        resp.status(400).send({
            erro: err.message
        })
    }
})
server.get('/pesquisarassociados' , async (req, resp) => {
    try{
    const {nome} = req.query;

    const resposta = await PesquisaAssociado(nome);
    if(!resposta){
        resp.status(401).send('Nenhum Associado foi encontrado')
    }
    else {
        resp.send(resposta)
    }
} catch(err){
    resp.send({
        erro: err.message 
    })
} 
})

server.get('/cliente/consultorias/:id', async (req, resp) => {
    try {
        const id = Number(req.params.id);
        
        const resposta = await buscarConsultoriaPorIdCliente(id)
        if(resposta===[]){
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

server.get('/cliente/clienteid/:id', async (req, resp) => {
    try {
        const id = Number(req.params.id);
        
        const resposta = await buscarIdCliente(id)
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



