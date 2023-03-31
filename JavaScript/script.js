let inputBuscarFilme = document.getElementById("input-buscar-filme")
let btnBuscarFilme = document.querySelector("#btn-buscar-filme")

const form = document.querySelector(".formulario")
console.log(form)

btnBuscarFilme.onclick = async () => {

  if (inputBuscarFilme.value.length > 0) {

    let resultfet = await fetch("http://www.omdbapi.com/?apikey=ae519680&s=" + inputBuscarFilme.value, { mode: "cors" })
    let jsonresult = await resultfet.json();
    console.log(jsonresult)
      
    let filmes = jsonresult.Search.map((item) => {

      let filme = new Filme(
        item.imdbID,
        item.Title,
        item.Year,
        item.Runtime,
        null,
        null,
        null,
        null,
        item.Poster,
        null,
        null,
        null
      );

      return filme;
    });
    listarFilmes(filmes);

  }
  return false;
}
let listarFilmes = async (filmes) => {

  let listaFilmes = document.querySelector("#lista-filmes")
  listaFilmes.innerHTML = "";
  console.log(filmes)
  filmes.forEach(async (filme) => {

    listaFilmes.appendChild(await filme.getCard());

    // filme.getDetalhes(filme.id)
  });

}
let detalhesFilme = async (id) => {
  return fetch(`https://www.omdbapi.com/?apikey=ae519680&i=${id}`)
    .then((resp) => resp.json())
    .then((resp) => {

      console.log(resp)
      let filme = new Filme(
        resp.imdbID,
        resp.Title,
        resp.Year,
        resp.Genre.split(),
        resp.Runtime,
        resp.Poster,
        resp.Plot,
        resp.Director,
        resp.Actors.split(", "),
        resp.Awards,
        resp.imdbRating
      )
      console.log(filme)
      return filme
    });
}