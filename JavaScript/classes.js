class Filme {
  constructor(
    id,
    Titulo,
    ano,
    genero,
    duracao,
    sinopse,
    classificacao,
    poster,
    avaliacao,
    direcao,
    lancamento,
    elenco
  ) {
    this.id = id;
    this.titulo = Titulo;
    this.ano = ano;
    this.genero = genero;
    this.duracao = duracao;
    this.sinopse = sinopse;
    this.classificacao = classificacao;
    this.poster = poster;
    this.avaliacao = avaliacao;
    this.direcao = direcao;
    this.lancamento = lancamento;
    this.elenco = elenco;
  }
  getDetalhes = async (id) => {//card completo.
    let dialog = document.createElement("div");
    dialog.setAttribute("id", "caixa");
    const fetchedFilm = await detalhesFilme(id);
    // console.log(fetchedFilm);

    let sinopse = document.querySelector("#result1");
    // console.log(sinopse, fetchedFilm.classificacao);
    sinopse.innerText = fetchedFilm.sinopse;

    let atores = document.querySelector("#result2");
    atores.innerText = fetchedFilm.elenco;

    // let banner = document.createElement("img");
    // banner.setAttribute("id", "imagem");
    let banner = document.querySelector("#imagem");
    banner.setAttribute("src", this.poster);

    // let corpo=document.getElementById("lita-filmes");
    // corpo.setAttribute("style","filter: blur(2px);");
    dialog = document.querySelector("#caixa");
    document.querySelector("#tituloFilme").innerHTML = fetchedFilm.titulo;

    let duracao = document.querySelector("#result3");
    duracao.innerText = fetchedFilm.duracao;

    let lancamento = document.querySelector("#result4");
    lancamento.innerText = fetchedFilm.lancamento;

    let esc = document.querySelector("#result5");
    esc.innerText = fetchedFilm.direcao;

    let gen = document.querySelector("#result6");
    gen.innerText = fetchedFilm.genero;

    dialog.setAttribute("style", "position:absolute;");

    dialog.appendChild(document.createElement("div")); //essencial.

    dialog.setAttribute("style", "display:flex");

    const favoritar = document.querySelector("#favoritar");

    favoritar.addEventListener("click", () => {
      const favoritos = JSON.parse(localStorage.getItem("idmovie")) || [];
      console.log("click")     
      if (!favoritos.includes(fetchedFilm.id)) {
        favoritos.push(fetchedFilm.id);
        localStorage.setItem("idmovie", JSON.stringify(favoritos));
      } else {
        let novosFavoritos = favoritos.filter((id) => {
          return id != fetchedFilm.id;
        });
        localStorage.setItem("idmovie", JSON.stringify(novosFavoritos));
      }
    });

    return dialog;
  };
  getCard = async () => {
    console.log(this.poster);
    let card = document.createElement("div");
    card.setAttribute("class", "card");

    let banner = document.createElement("img");
    banner.setAttribute("class", "card_img");
    banner.setAttribute("src", this.poster);

    let card_body = document.createElement("div");
    card_body.setAttribute("class", "card_body");

    let htitle = document.createElement("h5");
    htitle.setAttribute("class", "cardTitle");

    let divDetalhes = document.createElement("div");
    divDetalhes.setAttribute(
      "style",
      "display:flex justify-content:space-between;"
    );

    let divGenero = document.createElement("div");
    divGenero.setAttribute("style", "flex:grow:1;");

    let divAno = document.createElement("div");
    divAno.setAttribute("style", "flex-grow:1;");

    let divClassificacao = document.createElement("div");
    divClassificacao.setAttribute("style", "flex-grow:1;");
    htitle.appendChild(document.createTextNode(this.titulo));
    divGenero.appendChild(document.createTextNode(this.genero));
    divAno.appendChild(document.createTextNode(this.ano));
    divClassificacao.appendChild(document.createTextNode(this.classificacao));
    divDetalhes.appendChild(divGenero);
    divDetalhes.appendChild(divAno);
    divDetalhes.appendChild(divClassificacao);

    card.appendChild(banner);
    card.appendChild(card_body);
    card_body.appendChild(htitle);
    card_body.appendChild(divDetalhes);

    let btnDetalhes = document.createElement("button");
    btnDetalhes.appendChild(document.createTextNode("Ver mais..."));
    btnDetalhes.setAttribute("id", this.id);
    btnDetalhes.setAttribute("class", "btnDetalhesFilme");
    console.log(btnDetalhes);
    btnDetalhes.addEventListener("click", () => this.getDetalhes(this.id));
    card.appendChild(btnDetalhes);

    const fechar = document.querySelector("#fechar");
    fechar.addEventListener("click", () => {
      document.querySelector("#caixa").style.display = "none";
    });
    
    return card;
  };
}
