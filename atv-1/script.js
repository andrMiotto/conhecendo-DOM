
//1
const pegarHeader = document.getElementById('cabecalho');

console.log(pegarHeader);

//2
const gridSection = document.getElementsByClassName('grid-section');
console.log(gridSection[0]);

//3
const imagens = document.querySelectorAll('img');
console.log(imagens);

console.log(imagens.length)


//4 
const paragrafos = document.querySelector('.grid-section p');
console.log(paragrafos);

const links = document.querySelector('#contato a');
console.log(links);

//5
const h2 = document.querySelectorAll('h2');
console.log(h2);

const filhos = document.querySelectorAll('main p');
const filhos2 = document.querySelectorAll('footer p');

console.log(filhos,filhos2);

//6
h2.forEach((gridItem) => {
  gridItem.classList.add('h2');
  const conteudo = gridItem.innerText;
  console.log(conteudo); 
});


