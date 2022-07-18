import {Router as expressRouter} from 'express';
import {buscarRepositoriosAntigos} from './controllers/RepositorioController.js'

const router = expressRouter();

export const route = router.get('/repositorios', buscarRepositoriosAntigos);