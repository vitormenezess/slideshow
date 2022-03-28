"use strict";

const images = [
  { id: "1", url: "imagens/prato01.jpg" },
  { id: "2", url: "imagens/prato02.jpg" },
  { id: "3", url: "imagens/prato03.jpg" },
  { id: "4", url: "imagens/prato04.jpg" },
  { id: "5", url: "imagens/prato05.jpg" },
  { id: "6", url: "imagens/prato06.jpg" },
  { id: "7", url: "imagens/prato07.jpg" },
];
const containerItens = document.querySelector("#itens");

const loadImages = (images, container) => {
  images.forEach((image) => {
    container.innerHTML += `<div class= 'item'>
        <img src='${image.url}'
        </div>
        `;
  });
};

loadImages(images, containerItens);

let itens = document.querySelectorAll(".item");
//arrow functions
const anterior = () => {
  containerItens.appendChild(itens[0]);
  itens = document.querySelectorAll(".item");
};
//function normal
function proximo(){
  const lastItem = itens[itens.length - 1];
  containerItens.insertBefore(lastItem, itens[0]);
  itens = document.querySelectorAll(".item");

};
document.querySelector("#anterior").addEventListener("click", anterior);
document.querySelector("#proximo").addEventListener("click", proximo);
