import 'dotenv/config'
import express from 'express'
import cors from 'cors'
import AdvogadoController from './controller/AdvogadoController.js'

const server = express();
server.use(cors());
server.use(express.json());

server.use(AdvogadoController);

server.listen(process.env.PORT, () => console.log(`API NA PORTA ${process.env.PORT}`));