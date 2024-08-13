import { cars } from './src/dados/cars.js';
import { createElements } from './src/scripts/createElements.js';
import { searchCars } from './src/scripts/searchCars.js';
import { filterCars } from './src/scripts/filtersCars.js';

const carsDiv = document.getElementById('cars');

const inputSearch = document.getElementById('input-search');
const btnSearch = document.getElementById('btn-search');
const selectFilters = document.getElementById('select-filters');

window.addEventListener('load', () => {
  if (!localStorage.getItem('localStorageCar')) {
    localStorage.setItem('localStorageCar', JSON.stringify([]));
  } 
  
  createElements(cars, carsDiv);
  
});

btnSearch.addEventListener('click', (event) => {
  event.preventDefault();
  searchCars(cars, carsDiv, inputSearch);
});

selectFilters.addEventListener('change', (event) =>
  filterCars(event.target, carsDiv),
);
