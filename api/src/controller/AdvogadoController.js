import { Router } from 'express';
import multer from 'multer'
import { LoginAdvogado, AgendarConsultoria, CadastroAdvogado, Remover, alterarimgadvogado, EditarPerfil, AdvogadoEmail, SitAdvogado } from '../repository/AdvogadoRepository.js';

const server = Router();
const upload = multer({dest: 'storage/FotoAdvogado'})

server.post('/login/advogado', async (req, resp) => {
    try {
        const { email, senha } = req.body;
        const resposta = await LoginAdvogado(email, senha)

        if (!resposta) {
            throw new Error('Senha ou E-mail incorretos.')
        }
    
            
        resp.send(resposta)
    }
    catch (err) {
        resp.status(401).send({
            erro: err.message
        })

    }
})

server.post("/email/advogado", async (req, resp) => {
	try {   
		const advogado = req.body;
		const verif = await AdvogadoEmail(advogado.email);
		if (!verif) {
			const r = await LoginAdvogado(email);
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

server.post('/advogado/admin/agendar', async (req, resp) => {
    try {
        const novaconsul = req.body;

        if (novaconsul.idAdvogado == 0) {
            throw new Error("Id admin nulo")
        }

        if (novaconsul.idCliente == 0) {
            throw new Error("Selecione um cliente")
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

server.post('/cadastro/advogado', async (req, resp) => {
    try {
        const novoadvo = req.body;
        
        if (!novoadvo.nome) {
            throw new Error("Coloque um nome")
        }

        if (!novoadvo.localizacao) {
            throw new Error("Selecione um local")
        }

        if (!novoadvo.oab ) {
            throw new Error("Insira sua OAB")
        }
        
        if (novoadvo.oab.lenght > 8 ) {
            throw new Error("Tem algo de errado com sua OAB")
        }
        
        
        if (!novoadvo.telefone) {
            throw new Error("Insira um telefone")
        }
        
        if (!novoadvo.email) {
            throw new Error("Insira um email")
        }
        
        if (!novoadvo.senha) {
            throw new Error("Insira uma senha")
        }
        if (novoadvo.senha.lenght < 9) {
            throw new Error("Insira uma senha maior que 8 caracteres")
        }
        
        if (!novoadvo.area) {
            throw new Error("Selecione uma área")
        }

        if (novoadvo.area == 0) {
            throw new Error("Selecione uma área")
        }
        
        const advogado = await CadastroAdvogado(novoadvo)
        

        resp.status(204).send()
    } catch (err) {
        console.log(err)
        resp.status(401).send({
            erro: err.message
        })
    }
})

server.delete('/advogado/consultoria/:id', async (req, resp) =>{
    try {
        const {id} = req.params;
        const resposta = await Remover(id)

        if(resposta != 1){
            throw new Error('Não foi possivel deletar a consultoria')
        }
        else{
        resp.status(204).send();
        }
    } catch (err) {
        resp.status(400).send({
            erro: err.message
        })
    }
})

server.put('/advogado/:id/foto', upload.single('foto')  ,async (req, resp) => {
    try {
        const { id } = req.params;
        const img = req.file.path;

        const resposta = await alterarimgadvogado(img, id)
        if (resposta != 1) {
            throw new Error('A imagem não pode ser salva')
        }
        resp.status(204).send();
    } catch (err) {
        resp.status(400).send({
            erro:err.message
        })
    }
})

server.put('/advogado/editar/:id', async (req, resp)=>{
    try {
        const { id } = req.params;
        const advogado = req.body;

        if (!advogado.nome) {
            throw new Error("Insira um nome")
        }

        if (advogado.area == 0) {
            throw new Error("Selecione uma área")
        }
        
        if (!advogado.email) {
            throw new Error("Insira um email")
        }
        
        if (!advogado.localizacao ) {
            throw new Error("Insira um Local")
        }
        
        if (!advogado.telefone) {
            throw new Error("Insira um telefone")
        }

        if (!advogado.desc) {
            throw new Error("Insira uma descrição")
        }
    
    
        const resposta = await EditarPerfil(id, advogado)
        if(resposta!=1){
            throw new Error('Não foi possivel editar')
        }
        else{
            resp.status(204).send()
        }
    } catch (err) {
        resp.status(400).send({
            erro:err.message
        })
    }
})

server.get('/advogado/situacao/:id', async (req, resp) => {
    try {
        const {id}= req.params
        const resposta = await SitAdvogado(id)

        resp.send(resposta)
    }
    catch (err) {
        resp.status(400).send({
            erro: err.message
        })
    }
})
export default server;