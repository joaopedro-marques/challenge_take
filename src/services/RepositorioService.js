import fetch from 'node-fetch'; 
 
 export async function buscarRepositorios() {
    const repos = await fetch('https://api.github.com/orgs/takenet/repos').then(resposta => resposta.json());
    const reposC = repositoriosCSharp(repos);
    const reposOrdem = ordenarRepositorios(reposC);
    const repos5 = retornarRepos(reposOrdem);
    const response = formatarRepos(repos5);
    return response;
}

function repositoriosCSharp(repos){
  return repos.map((obj) => {
    if (obj.language = 'C#') return obj;
  })
}

function ordenarRepositorios(repos){
  return repos.sort((a,b) => {
    return new Date(a.created_at).valueOf() - new Date(b.created_at).valueOf();
  })
}

function retornarRepos(repos){
  return repos.slice(0,5);
}

function formatarRepos(repos){
  return repos.map((obj) => {
    return {
      titulo: obj.name,
      subtitulo: obj.description
    }
  })
}
