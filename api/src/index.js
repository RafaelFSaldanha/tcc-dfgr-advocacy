import 'dotenv/config'
import express from 'express'
import cors from 'cors'
import AdvogadoController from './controller/AdvogadoController.js'
import areaController from './controller/areaController.js'
import ClienteController from './controller/ClienteController.js'

const server = express();
server.use(cors());
server.use(express.json());

server.use('/storage/FotoAdvogado', express.static('storage/FotoAdvogado'))
server.use('/storage/FotoCliente', express.static('storage/FotoCliente'))

server.use(AdvogadoController);
server.use(areaController);
server.use(ClienteController);

server.listen(process.env.PORT, () => console.log(`API NA PORTA ${process.env.PORT}`));