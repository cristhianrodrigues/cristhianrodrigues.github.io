const botaoModoEscuro = document.querySelector('.botao-modo-escuro');
const enterruptorModoEscuro = document.querySelector('.interruptor-modo-escuro');
const todosOsElementos = document.querySelector('*');
const header = document.querySelector('header');
const tituloLogo = document.querySelector('.tituloLogo');
const barraDeNavegacao = document.querySelector('.barra-de-navegacao');
const tituloDoBotaoModoEscuro = document.querySelector('.titulo-modo-escuro');
const main = document.querySelector('main');
const body = document.querySelector('body');
const tituloApresentacao = document.querySelector('.apresentacao');
const hr = document.querySelector('hr');
const sobreMim = document.querySelector('.sobre-mim');
const divisaoProjetos = document.querySelector('.divisao-fim');
const subTitulo = document.querySelector('.titulo');
const conteudoSobreOsProjetos = document.querySelector('.projetos');
const subTitulosDosProjetos = document.querySelector('.sub-titulo');
const segundoConteudoEmDestaque = document.querySelector('.segundo-conteudo-em-destaque');
const outrosProjetos = document.querySelector('.outros-projetos');
const siteLink = document.querySelector('.site-link');
const redes = document.querySelector('.redes');
const creditos = document.querySelector('.creditos');


if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
    enterruptorModoEscuro.classList.toggle('modo-escuro-ativado');
    header.classList.toggle('header-modo-escuro');
    tituloLogo.classList.toggle('tituloLogo-modo-escuro');
    barraDeNavegacao.classList.toggle('barra-de-navegacao-modo-escuro');
    tituloDoBotaoModoEscuro.classList.toggle('titulo-modo-escuro-em-modo-escuro');
    botaoModoEscuro.classList.toggle('botao-modo-escuro-em-modo-escuro')
    main.classList.toggle('main-modo-escuro');
    body.classList.toggle('body-modo-escuro');
    tituloApresentacao.classList.toggle('conteudo-em-modo-escuro');
    hr.classList.toggle('hr-em-modo-escuro');
    sobreMim.classList.toggle('texto-em-modo-escuro');
    divisaoProjetos.classList.toggle('hr-em-modo-escuro');
    subTitulo.classList.toggle('titulo-modo-escuro-em-modo-escuro');
    conteudoSobreOsProjetos.classList.toggle('texto-em-modo-escuro');
    subTitulosDosProjetos.classList.toggle('sub-titulos-em-modo-escuro');
    segundoConteudoEmDestaque.classList.toggle('segundo-conteudo-em-destaque-com-modo-escuro');
    outrosProjetos.classList.toggle('outros-projetos-em-modo-escuro');
    siteLink.classList.toggle('site-link-modo-escuro');
    redes.classList.toggle('redes-modo-escuro');
    creditos.classList.toggle('creditos-em-modo-escuro');
    header.style.transition = "none";
    todosOsElementos.style.transition = "none";
    main.style.transition = "none";
    enterruptorModoEscuro.style.transition = "none";
};



botaoModoEscuro.addEventListener('click', trocarDeTema);

function trocarDeTema() {
    enterruptorModoEscuro.classList.toggle('modo-escuro-ativado');
    header.classList.toggle('header-modo-escuro');
    tituloLogo.classList.toggle('tituloLogo-modo-escuro');
    barraDeNavegacao.classList.toggle('barra-de-navegacao-modo-escuro');
    tituloDoBotaoModoEscuro.classList.toggle('titulo-modo-escuro-em-modo-escuro');
    botaoModoEscuro.classList.toggle('botao-modo-escuro-em-modo-escuro')
    main.classList.toggle('main-modo-escuro');
    body.classList.toggle('body-modo-escuro');
    tituloApresentacao.classList.toggle('conteudo-em-modo-escuro');
    hr.classList.toggle('hr-em-modo-escuro');
    sobreMim.classList.toggle('texto-em-modo-escuro');
    divisaoProjetos.classList.toggle('hr-em-modo-escuro');
    subTitulo.classList.toggle('titulo-modo-escuro-em-modo-escuro');
    conteudoSobreOsProjetos.classList.toggle('texto-em-modo-escuro');
    subTitulosDosProjetos.classList.toggle('sub-titulos-em-modo-escuro');
    segundoConteudoEmDestaque.classList.toggle('segundo-conteudo-em-destaque-com-modo-escuro');
    outrosProjetos.classList.toggle('outros-projetos-em-modo-escuro');
    siteLink.classList.toggle('site-link-modo-escuro');
    redes.classList.toggle('redes-modo-escuro');
    creditos.classList.toggle('creditos-em-modo-escuro');
};