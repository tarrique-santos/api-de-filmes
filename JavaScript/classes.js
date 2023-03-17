class Ator{
    constructor(id,nome){
        this.nome=nome;
        this.id=id;
    }
}
class Diretor{
    constructor(id,nome){
        this.nome=nome;
        this.id=id;
    }
}
class Filme {
    constructor(id , titulo , ano , genero , duracao , sinopse , classificacao , ranking , poster , avaliacao , direcao , elenco) {
        this.id=id;
        this.titulo=titulo;
        this.ano=ano;
        this.genero=genero;
        this.duracao=duracao;
        this.sinopse=sinopse;
        this.classificacao=classificacao;
        this.ranking=ranking;
        this.poster=poster;
        this.elenco=elenco;
        this.direcao=direcao;
        this.avaliacao=avaliacao
    }
    getCard=async()=>{
        let poster=document.createElement("div")
        card.setAttribute("class","card")
  
        let banner=document.createElement("img")
        banner.setAttribute("class","card_img")
        banner.setAttribute("src",this.poster)
  
        let card_body=createElement("div")
        card_body.setAttribute("class","card_body")
  
        let htitle=createElement("h5")
        htitle.setAttribute("class","cardTitle")
  
        let divDetalhes=document.createElement("div")
        divDetalhes.setAttribute("style","display:flex justify-content:space-between;")
  
        let divGenero=document.createElement("div")
        divGenero.setAttribute("style","flex:grow:1;")
  
        let divAno=document.createElement("div")
        divAno.setAttribute("style","flex-grow:1;")
  
        let divClassificacao=document.createElement("div")
        divClassificacao.setAttribute("style","flex-grow:1;")
  
        htitle.appendChild(document.createTextNode(this.titulo))
        divGenero.appendChild(document.createTextNode(this.genero))
        divAno.appendChild(document.createTextNode(this.ano))
        divClassificacao.appendChild(document.createTextNode(this.classificacao))
        divDetalhes.appendChild(divGenero)
        divDetalhes.appendChild(divAno)
        divDetalhes.appendChild(divClassificacao)
  
        card.appendChild(card_img)
        card.appendChild(card_body)
        card_body.appendChild(htitle)
        card_body.appendChild(divDetalhes)
        return card
      }
}
let ator = new Ator(1 , "Tobey Maguire");

// console.log(ator)

let diretor = new Diretor(1 , "Sam Raimi")
// console.log(diretor)

// console.log(filme)

// document.querySelectorAll(img).src = "./IMG/favoritar"

const alterar = document.querySelector(".alterar");

// alterar.addEventListener("Click",alteracao);

class OMDbAPI {
  constructor(apiKey) {
    this.apiKey = apiKey;
    this.baseUrl = 'http://www.omdbapi.com/';
  }
  
  async searchMovie(title) {
    // https://www.omdbapi.com/?s=vingadores&page=1&apikey=fb26eb99
    this.title=title;
    const url = `${this.baseUrl}?s=${this.title}&apikey=${this.apiKey}`;
    const resposta = await fetch(url);
    const data = await resposta.json();
    console.log(data)
    return data;
  }    
}
const apiKey = 'ae519680';
const omdbApi = new OMDbAPI(apiKey);