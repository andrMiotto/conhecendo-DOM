

//1
const cartao_nome = document.getElementById('cartao-nome');
const nome_input = document.getElementById('nome-input');

nome_input.addEventListener('input', function () {
    cartao_nome.textContent = nome_input.value;
});


//2 
const btn_azul = document.getElementById('btn-azul');
const btn_verde = document.getElementById('btn-verde');

const cartao = document.getElementById('cartao');


btn_azul.addEventListener('click', () => {
    cartao.classList.remove('fundo-verde');
    cartao.classList.add('fundo-azul');
});

btn_verde.addEventListener('click', () => {
    cartao.classList.remove('fundo-azul');
    cartao.classList.add('fundo-verde');

});

//3
const btn_fonte = document.getElementById('btn-fonte');


btn_fonte.addEventListener('click', () => {

    cartao.classList.toggle('fonte-alternativa');
});

//4
const imagem_select = document.getElementById('imagem-select');
const cartao_imagem = document.getElementById('cartao-img');

imagem_select.addEventListener('change', () => {
    const icone = imagem_select.value;


    cartao_imagem.setAttribute('src', icone);

});


// 


const habilidade_input = document.getElementById('habilidade-input');
const lista_habilidades = document.getElementById('lista-habilidades');


const btn_adicionar = document.getElementById('btn-adicionar');

btn_adicionar.addEventListener('click', function () {
    const novoLi = document.createElement('li');

    novoLi.textContent = habilidade_input.value;

    lista_habilidades.appendChild(novoLi);

});
