// const pesquisa = document.querySelector("#pesquisa").value;
// const pesquisas = document.querySelector("#pesquisa_btn");


// pesquisaBtn.onclick = () => {
  
//   if (pesquisa.value.length > 0) {
//     let filmes = new Array();
//     fetch("https://www.omdbapi.com/?i=tt3896198&apikey=ae519680&s="+pesquisa.value)
//       .then((response) => response.json())
//       .then((response) => {
//         response.Search.forEach((item)=>{ 
//           console.log(item);
//           let filme=new Filme(
//             item.imdbID,
//             item.Title,
//             item.Year,
//             null,
//             item.Poster,
//             null,
//             null,
//             null,
//             null,
//             null,
//             null,
//           );
//           filmes.push(filme);
          
//       });
//       mostrarFilmes(filmes);
//     })
//   }
//   return false;
// }

// let mostrarFilmes = async(filmes) =>{
//   let listaFilmes = await document.querySelector("#lista_filmes");
 
//   mostrarFilmes.innerHTML = "";
  
//   console.log(mostrarFilmes);
//   if(filmes.length > 0){
//     filmes.forEach(async(filme) => {
//       mostrarFilmes.appendChild(await filme.getCard());
//     })
//   }
// }

//meu
const pesquisa = document.querySelector("#pesquisa_btn");
// const pesquisas=document.querySelector("#pesquisa");

const form = document.querySelector(".formulario")
// console.log(form)



    const pesquisas = document.querySelector("#pesquisa").value
    resposta = omdbApi.searchMovie(pesquisas)

    pesquisa.onclick=async()=>{
      if(pesquisas.value.lenght>0){
        let filmes =new Array();
        fetch("http://www.omdbapi.com/?apikey=ae519680&s="+pesquisas.value,{mode:"cors"})
        .then((resposta)=>resposta.json())
        .then((resposta)=>{
            resposta.Search.forEach((item)=>{
            console.log(item)
            let filme=new Filme(
              item.imdbID,
              item.Title,
              item.Year,
              null,
              null,
              item.Poster,
              null,
              null,
              null,
              null,
              null
            );
            filmes.push(filme);
          });
          listarFilmes(filmes);
          
        });

      }
      return false;
    }
    let listarFilmes=async(filmes)=>{
      let listaFilmes=await document.querySelector("#lista_filmes")
      listaFilmes.innerHTML="";
      console.log(listarFilmes)

      if(filmes.lenght>0){
        filmes.forEach(async(filme)=>{

          listarFilmes.appendChild(await filme.getCard());
        })
      }
    }