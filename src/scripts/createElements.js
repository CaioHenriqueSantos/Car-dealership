import { maskedNumber } from './maskedNumber.js';

const carShop = (array, index) => {
    const car = array[index].nome;
    const price = array[index].price;
    const image = array[index].imagem;

    const dataLocalStorage = JSON.parse(localStorage.getItem('localStorageCar'))
      dataLocalStorage.push({car, price, image})
      
    localStorage.setItem('localStorageCar', JSON.stringify(dataLocalStorage));
}

export function createElements(array, div) {
  div.innerHTML = '';
  array.forEach((element, index) => {
    div.innerHTML += `
  <div class="col-lg-3 col-md-6 col-sm-12 cars-p">
    <div class="cars-card animate__animated animate__fadeInUp">
      <div>
        <img class="w-100 ${element.css}" src="${element.imagem}" alt="${element.nome}"> 
      </div>
      <h2>${element.nome}</h2>
      <p>${maskedNumber(element.price)}</p>
      <ul>
      ${element.equipamentos.map((e) => `<li><i class="fa fa-check"></i> ${e}</li>`)
        .join('')}
      </ul>
      <button class="btn btn-warning btn-add">Adicionar ao carrinho</button> 
      <a class="btn btn-success btn-buy">Comprar</a>
    </div>
  </div>
  `;
  });

  const btnsAdd = document.querySelectorAll('.btn-add');
  btnsAdd.forEach((element, index) => {
    element.addEventListener('click', () => { 
      carShop(array, index);
    })
  });

const btnBuy = document.querySelectorAll('.btn-buy');
  btnBuy.forEach((element, index) => {
    element.addEventListener ('click', () => {
      carShop(array, index);
      return window.location.href = 'checkout.html';
    })
  })  
}

