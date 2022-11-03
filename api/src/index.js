import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import AdvogadoController from './controller/AdvogadoController.js';
import areaController from './controller/areaController.js';
import ClienteController from './controller/ClienteController.js';
import AdminController from './controller/AdminController.js';
import ChatController from './controller/ChatController.js';
import MensagensController from './controller/MensagensController.js';

const server = express();
server.use(cors());
server.use(express.json());

server.use('/storage/FotoAdvogado', express.static('storage/FotoAdvogado'));
server.use('/storage/FotoCliente', express.static('storage/FotoCliente'));

server.use(AdvogadoController);
server.use(areaController);
server.use(ClienteController);
server.use(AdminController);
server.use(ChatController);
server.use(MensagensController);

server.listen(process.env.PORT, () => console.log(`API NA PORTA ${process.env.PORT}`));