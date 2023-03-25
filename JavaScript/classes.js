class Filme {
  constructor(id, Titulo, ano, genero, duracao, sinopse, classificacao, ranking, poster, avaliacao, direcao , lancamento , elenco) {
    this.id = id;
    this.titulo = Titulo;
    this.ano = ano;
    this.genero = genero;
    this.duracao = duracao;
    this.sinopse = sinopse;
    this.classificacao = classificacao;
    this.ranking = ranking;
    this.poster = poster;
    this.avaliacao = avaliacao;
    this.direcao = direcao;
    this.lancamento=lancamento;
    this.elenco = elenco;
  }
  getDetalhes = async (id) => {
    
    let dialog = document.createElement("div")
    dialog.setAttribute("id", "caixa")
    const fetchedFilm = await detalhesFilme(id)
    console.log(fetchedFilm)

    // let corpo=document.getElementById("lita-filmes")
    // corpo.setAttribute("style","filter: blur(2px);")
    dialog = document.querySelector("#caixa")
    const titulo = document.createElement('h1')
    dialog.appendChild(titulo)
    dialog.setAttribute("style", "position:absolute;")
    dialog.appendChild("div")
    
    titulo.appendChild(document.createTextNode(fetchedFilm.Titulo))
    dialog.setAttribute("style","display:flex")

    return dialog;
  }
  getCard = async () => {
    console.log(this.poster)
    let card = document.createElement("div")
    card.setAttribute("class", "card")

    let banner = document.createElement("img")
    banner.setAttribute("class", "card_img")
    banner.setAttribute("src", this.poster)

    let card_body = document.createElement("div")
    card_body.setAttribute("class", "card_body")

    let htitle = document.createElement("h5")
    htitle.setAttribute("class", "cardTitle")

    let divDetalhes = document.createElement("div")
    divDetalhes.setAttribute("style", "display:flex justify-content:space-between;")

    let divGenero = document.createElement("div")
    divGenero.setAttribute("style", "flex:grow:1;")

    let divAno = document.createElement("div")
    divAno.setAttribute("style", "flex-grow:1;")

    let divClassificacao = document.createElement("div")
    divClassificacao.setAttribute("style", "flex-grow:1;")
    htitle.appendChild(document.createTextNode(this.titulo))
    divGenero.appendChild(document.createTextNode(this.genero))
    divAno.appendChild(document.createTextNode(this.ano))
    divClassificacao.appendChild(document.createTextNode(this.classificacao))
    divDetalhes.appendChild(divGenero)
    divDetalhes.appendChild(divAno)
    divDetalhes.appendChild(divClassificacao)

    card.appendChild(banner)
    card.appendChild(card_body)
    card_body.appendChild(htitle)
    card_body.appendChild(divDetalhes)

    let btnDetalhes = document.createElement('button')
    btnDetalhes.appendChild(document.createTextNode("Ver mais..."))
    btnDetalhes.setAttribute("id", this.id)
    btnDetalhes.setAttribute("class", "btnDetalhesFilme")
    console.log(btnDetalhes)
    btnDetalhes.addEventListener('click', () => this.getDetalhes(this.id))
    card.appendChild(btnDetalhes)

    // let fechar=document.querySelector("#fechar")
    // fechar.addEventListerner('click',() => this.getFechar())

    return card
  }
  getFechar = async() => {

  }
}