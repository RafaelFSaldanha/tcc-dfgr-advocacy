import 'dotenv/config';
import express from 'express';
import AdvogadoController from './controller/AdvogadoController.js';
import areaController from './controller/areaController.js';
import ClienteController from './controller/ClienteController.js';
import AdminController from './controller/AdminController.js';
import ChatController from './controller/ChatController.js';
import MensagensController from './controller/MensagensController.js';

import { httpServidor, router } from "./WebSocket/socket.js";

router.use('/storage/FotoAdvogado', express.static('storage/FotoAdvogado'));
router.use('/storage/FotoCliente', express.static('storage/FotoCliente'));

router.use(AdvogadoController);
router.use(areaController);
router.use(ClienteController);
router.use(AdminController);
router.use(ChatController);
router.use(MensagensController);

httpServidor.listen(process.env.PORT, () => console.log(`API NA PORTA ${process.env.PORT}`));