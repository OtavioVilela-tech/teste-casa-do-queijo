
const track = document.querySelector('.carrossel-track');
const slides = document.querySelectorAll('.slide');
const btnPrev = document.querySelector('.carrossel-btn.prev');
const btnNext = document.querySelector('.carrossel-btn.next');
const dotsContainer = document.querySelector('.carrossel-dots');

let indiceAtual = 0;
const total = slides.length;

slides.forEach((_, i) => {
    const dot = document.createElement('button');
    dot.classList.add('dot');
    dot.setAttribute('aria-label', `Ir para imagem ${i + 1}`);
    if (i === 0) dot.classList.add('ativo');
    dot.addEventListener('click', () => irPara(i));
    dotsContainer.appendChild(dot);
});

const dots = document.querySelectorAll('.dot');

function irPara(indice) {
    indiceAtual = (indice + total) % total; 
    track.style.transform = `translateX(-${indiceAtual * 100}%)`;

    dots.forEach(d => d.classList.remove('ativo'));
    dots[indiceAtual].classList.add('ativo');
}

btnNext.addEventListener('click', () => irPara(indiceAtual + 1));
btnPrev.addEventListener('click', () => irPara(indiceAtual - 1));

setInterval(() => irPara(indiceAtual + 1), 4000);

document.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowRight') irPara(indiceAtual + 1);
    if (e.key === 'ArrowLeft')  irPara(indiceAtual - 1);
});