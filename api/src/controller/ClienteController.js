import { Router } from 'express';
import multer from 'multer';
import { alterarimgcliente, buscarConsultoriaPorIdCliente, buscarIdCliente, CadastroCliente, EditarPerfilCliente, informacoesparacliente, ListarAssociados, LoginCliente, PesquisaAssociado, ClienteEmail } from '../repository/ClienteRepository.js';

const server = Router();
const upload = multer({dest: 'storage/FotoCliente'})


server.post('/cliente/cadastro', async (req,resp) => {
    try {
        const novocliente = req.body;
        
        if(!novocliente.nome){
            throw new Error("Insira um nome")
        }
        if(!novocliente.telefone){
            throw new Error("Insira um telefone")
        }

        if (novocliente.telefone.length < 15) {
            throw new Error("Coloque o número corretamente")
        }

        if(!novocliente.localizacao){
            throw new Error("Insira um estado válido")
        }
        if(!novocliente.email){
            throw new Error("Insira um email")
        }
        
        if(!novocliente.senha){
            throw new Error("Insira uma senha")
        }

        if (novocliente.senha.length < 9) {
            throw new Error("Insira uma senha maior que 8 caracteres")
        }
        
        
        const cliente = await CadastroCliente(novocliente)

        resp.send(cliente)

    } catch (err) {
        resp.status(401).send({
            erro: err.message
        })
        
    }
})

server.get('/listarclienteschat', async (req, resp) => {
    try {
        const linhas = await ListarClientesChat();
        resp.send(linhas);
    }
    catch (err) {
        resp.status(400).send({
            erro: err.message
        })
    }
})

server.post('/login/cliente', async (req, resp) => {
    try {
        const { email, senha } = req.body;
        const resposta = await LoginCliente(email, senha)
        if (!resposta) {
            throw new Error('Email ou senha incorretos!')
        }
            
        resp.send(resposta)
    }
    catch (err) {
        resp.status(401).send({
            erro: err.message
        })

    }
})

server.post("/email/cliente", async (req, resp) => {
	try {   
		const cliente = req.body;
		const verif = await ClienteEmail(cliente.email);
		if (!verif) {
			const r = await LoginCliente(email);
			resp.send(r);
		} else {
			throw new Error("Esse e-mail já está em uso.");
		}
	} catch (err) {
		resp.status(401).send({
			erro: err.message,
		});
	}
});
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
server.put('/editarperfil/cliente', async (req, resp) => {
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


server.get('/cliente/informacoes/:id', async (req, resp) => {
    try {
        const id = Number(req.params.id);
        
        const resposta = await informacoesparacliente(id)
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

server.put('/cliente/editarperfil/:id', async (req, resp) => {
    try{
    const {id} = req.params
    const cliente = req.body;

    if(!cliente.nome){
        throw new Error('Nome inválido')
    }
    if(!cliente.telefone){
        throw new Error('Telefone inválido')
    }
    if(!cliente.localizacao){
        throw new Error('Localização inválido')
    }
    if(!cliente.email){
        throw new Error('Email inválido')
    }
    if(!cliente.senha){
        throw new Error('Senha inválida')
    }

    const resposta = await EditarPerfilCliente(id, cliente)
    if(resposta != 1){
        throw new Error('Não foi possível concluir a alteração')
    }
    else {
        resp.status(200).send()
    }
    }
    catch(err){
        resp.status(400).send({
            erro: err.message
        })
    }
})

server.get('/cliente/consultorias/:id', async (req, resp) => {
    try {
        const id = Number(req.params.id);
        
        const resposta = await buscarConsultoriaPorIdCliente(id)
        if(resposta === []){
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

export default server;



