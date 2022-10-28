// Série
// * Título;
// * Sinopse;
// * Quantas temporadas e episódios?;
// * Ano de Lançamento;
// * Nota acima de 7 no imdb?;
// * Gênero (terror, suspense, ação, comédia etc);

// serie1 = {
//   titulo: 'The Office',
//   anoLancamento: 2005,
//   notaImdb: true,
//   temporadasEpisodios: ['9 temporadas', '201 episódios']
// }

// serie2 = {
//   titulo: 'Parks and Recreations',
//   anoLancamento: 2009,
//   notaImdb: true,
//   temporadasEpisodios: ['7 temporadas', '125 episódios']
// }

// serie3 = {
//   titulo: 'Brooklyn Nine-Nine',
//   anoLancamento: 2013,
//   notaImdb: true,
//   temporadasEpisodios: ['8 temporadas', '153 episódios']
// }
// const array = []
// if (!array.length) {
//   array.push(series)
//   console.log(array)
// } else {
//   alert('O item não foi adicionado, array não está vazio')
// }
// const media = (anoLancamento1 + anoLancamento2 + anoLancamento3) / 3
// console.log('O valor da média dos anos de lançamento é: ' + media)

// const notaImdb = notaImdb1 && notaImdb2 && notaImdb3
// console.log('Todas tiveram a nota do IMDb maior que 7? ' + notaImdb)

const series = [
  {
    titulo: "The Office",
    anoLancamento: 2005,
    notaImdb: true,
    temporadasEpisodios: ["9 temporadas", "201 episódios"],
  },

  {
    titulo: "Parks and Recreations",
    anoLancamento: 2009,
    notaImdb: true,
    temporadasEpisodios: ["7 temporadas", "125 episódios"],
  },

  {
    titulo: "Brooklyn Nine-Nine",
    anoLancamento: 2013,
    notaImdb: true,
    temporadasEpisodios: ["8 temporadas", "153 episódios"],
  },
];

function caixaAlta(objeto) {
  for (const serie of objeto) {
    serie.titulo = serie.titulo.toUpperCase();
  }
  return objeto;
}
caixaAlta(series);

function imprimirObjeto(objeto) {
  for (elemento of objeto) console.log(elemento);
}
imprimirObjeto(series);

function stringIgualParametro(objeto, string) {
  novoObj = {};
  string = string.toUpperCase();
  for (elemento in objeto) {
    if (objeto[elemento].titulo.includes(string)) {
      novoObj = objeto[elemento];
    }
  }
  if (Object.keys(novoObj).length === 0) {
    alert("Item não encontrado");
  } else {
    return novoObj;
  }
}
console.log(stringIgualParametro(series, "the office"));

function pesquisar() {
  let input, filter, list, cards;
  input = document.getElementById("botao-series");
  filter = input.value.toUpperCase();
  cards = document.getElementsByClassName("series");
  list = document.getElementsByClassName("series-titulo");
  for (let i = 0; i < list.length; i++) {
    if (list[i].innerHTML.toUpperCase().indexOf(filter) > -1) {
      cards[i].style.display = "";
    } else {
      cards[i].style.display = "none";
    }
  }
}
