import { cars } from './Dados/cars.js';

const carsDiv = document.getElementById('cars');
const inputSearch = document.getElementById('input-search');
const btnSearch = document.getElementById('btn-search');
const selectFilters = document.getElementById('select-filters');

function createElements(array) {
  carsDiv.innerHTML = '';
  array.forEach((element) => {
    carsDiv.innerHTML += `
  <div class="col-lg-3 col-md-6 col-sm-12 cars-p">
    <div class="cars-card">
      <div>
        <img class="w-100 ${element.css}" src="${element.imagem}" alt="${
      element.nome
    }"> 
      </div>
      <h2>${element.nome}</h2>
    <ul>
    ${element.equipamentos
      .map((e) => `<li><i class="fa fa-check"></i> ${e}</li>`)
      .join('')}
    </ul>
      </div>
  </div>
  `;
  });
}

function searchCars() {
  const inputValue = inputSearch.value;
  const filteredCars = cars.filter((e) => e.nome.includes(inputValue));
  createElements(filteredCars);
}

function filterCars({ target }) {
  const { value } = target;
  switch (value) {
    case '1':
      const newCars = cars.sort((a, b) => a.price - b.price);
      createElements(newCars);
      break;
    case '2':
      const newCars2 = cars.sort((a, b) => b.price - a.price);
      createElements(newCars2);
      break;

    default:
      break;
  }
}

window.addEventListener('load', createElements(cars));

btnSearch.addEventListener('click', (event) => {
  event.preventDefault();
  searchCars();
});

selectFilters.addEventListener('change', filterCars);
