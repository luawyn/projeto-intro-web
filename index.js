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

// function imprimirObjeto(objeto) {
//   for (elemento of objeto) console.log(elemento);
// }
// imprimirObjeto(series);

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
// console.log(stringIgualParametro(series, "the office"));

function hiddenCard() {
  let cards = document.getElementsByClassName("hidden");
  for (let i = 0; i < cards.length; i++) {
    cards[i].style.display = "none";
  }
}
hiddenCard();

function search() {
  let input, filter, list, cards;
  input = document.getElementById("input-series");
  filter = input.value.toUpperCase();
  cards = document.getElementsByClassName("card");
  list = document.getElementsByTagName("h3");
  for (let i = 0; i < list.length; i++) {
    if (list[i].innerHTML.toUpperCase().indexOf(filter) > -1) {
      cards[i].style.display = "";
    } else {
      cards[i].style.display = "none";
    }
    if (input.value === "") {
      hiddenCard();
    }
  }
}

// ICON MENU

const nav = document.querySelector("#header nav");
const toggle = document.querySelectorAll("nav .toggle");

for (const element of toggle) {
  element.addEventListener("click", function () {
    nav.classList.toggle("show");
  });
}

// ITEMS MENU

const links = document.querySelectorAll("nav ul li a");

for (const link of links) {
  link.addEventListener("click", function () {
    nav.classList.remove("show");
  });
}

//  SHADOW SCROLL HEADER
const header = document.querySelector("#header");
const navHeight = header.offsetHeight;
function changeHeaderWhenScroll() {
  if (window.scrollY >= navHeight) {
    header.classList.add("scroll");
  } else {
    header.classList.remove("scroll");
  }
}

// TESTIMONIALS SWIPER

const swiper = new Swiper(".swiper", {
  slidesPerView: 1,
  pagination: {
    el: ".swiper-pagination",
    type: "bullets",
    clickable: true,
  },
  mousewheel: true,
  keyboard: true,
  breakpoints: {
    767: {
      slidesPerView: 2,
      setWrapperSize: true,
    },
  },
});

// SCROLLREVEAL;

const scrollReveal = ScrollReveal({
  origin: "top",
  distance: "30px",
  duration: 700,
  reset: true,
});

scrollReveal.reveal(
  `#home .image, #home .text,
  #about .image, #about .text,
  #categories header,
  #testimonials header, #testimonials .testimonials,
  #contact .text, #contact .links,
  footer .brand, footer .social
  `,
  { interval: 100 }
);

// ARROW TO TOP
const backToTopButton = document.querySelector(".back-to-top");
function backToTop() {
  if (window.scrollY >= 800) {
    backToTopButton.classList.add("show");
  } else {
    backToTopButton.classList.remove("show");
  }
}

const sections = document.querySelectorAll("main section[id]");
function activateMenuAtCurrentSection() {
  const checkpoint = window.pageYOffset + (window.innerHeight / 8) * 4;
  for (let section of sections) {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.offsetHeight;
    const sectionId = section.getAttribute("id");
    const checkpointStart = checkpoint >= sectionTop;
    const checkpointEnd = checkpoint <= sectionTop + sectionHeight;
    if (checkpointStart && checkpointEnd) {
      document
        .querySelector("nav ul li a[href*=" + sectionId + "]")
        .classList.add("active");
    } else {
      document
        .querySelector("nav ul li a[href*=" + sectionId + "]")
        .classList.remove("active");
    }
  }
}

window.addEventListener("scroll", function () {
  changeHeaderWhenScroll();
  backToTop();
  activateMenuAtCurrentSection();
});
