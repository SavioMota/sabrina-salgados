function mostrarAoRolar() {
  const elementos = document.querySelectorAll(".reveal");
  const alturaJanela = window.innerHeight * 0.85;

  elementos.forEach((elemento) => {
    const topoElemento = elemento.getBoundingClientRect().top;

    if (topoElemento < alturaJanela) {
      elemento.classList.add("ativo");
    } else {
      elemento.classList.remove("ativo"); // deixa mais fluido
    }
  });
}

window.addEventListener("scroll", mostrarAoRolar);
window.addEventListener("load", mostrarAoRolar);

const slidesHero = document.querySelectorAll(".hero-slide");
let slideAtual = 0;

function trocarSlideHero() {
  if (slidesHero.length === 0) return;

  slidesHero[slideAtual].classList.remove("ativa");
  slideAtual = (slideAtual + 1) % slidesHero.length;
  slidesHero[slideAtual].classList.add("ativa");
}

setInterval(trocarSlideHero, 4000);