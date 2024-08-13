import { maskedNumber } from './maskedNumber.js';

const divCheckout = document.getElementById('div-checkout');
const divPrices = document.getElementById('div-prices');
const localStorageCar = JSON.parse(localStorage.getItem('localStorageCar'))

const locaStoragePrice = localStorageCar.reduce((acc, e) => acc + e.price, 0)

localStorageCar.map(e => divCheckout.innerHTML += `
  <div class="col-lg-3 col-md-6 col-sm-12 cars-p">
    <div class="cars-card-checkout animate__animated animate__fadeInUp">
      <div class="car-info-checkout">
        <div>
          <img class="car-image" src="${e.image}" alt="Imagem do carro">
        </div>
        <h2 class="car-name">${e.car}</h2>
        <p class="car-price">${maskedNumber(e.price)}</p>
      </div>
    </div>
  </div>`) 

divPrices.innerHTML = `
<h2>Total: ${maskedNumber(locaStoragePrice)}</h2>
`

console.log(localStorageCar);