import 'dotenv/config'
import express from 'express'
import cors from 'cors'
import AdvogadoController from './controller/AdvogadoController.js'
import areaController from './controller/areaController.js'

const server = express();
server.use(cors());
server.use(express.json());

server.use(AdvogadoController);
server.use(areaController);

server.listen(process.env.PORT, () => console.log(`API NA PORTA ${process.env.PORT}`));