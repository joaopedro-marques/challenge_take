import {buscarRepositorios} from '../services/RepositorioService.js'


export async function buscarRepositoriosAntigos (req,res){
  
  const repositorios = await buscarRepositorios();
  
  res.json(repositorios);
}
