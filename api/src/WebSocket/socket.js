import http from "http";
import cors from "cors";
import { Server } from "socket.io";
import express from "express";


const router = express();
router.use(express.json());
router.use(cors());

const httpServidor = http.createServer(router);

const io = new Server(httpServidor, {
  cors: {
    origin: "http://localhost:3000",
  },
});

export { router, io, httpServidor };