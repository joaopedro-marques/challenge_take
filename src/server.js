import dotenv from 'dotenv';
import express from 'express';
import {route} from './routes.js'

const server = express();

server.use(
  express.json()
);

server.use('/api', route);

dotenv.config({path:'variaveis.env'});

server.listen(process.env.PORT, ()=>{
  console.log(`Servidor rodando em: http://localhost:${process.env.PORT}`)
})