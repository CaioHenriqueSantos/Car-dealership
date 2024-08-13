import { createElements } from './createElements.js';
import { appendAlert } from './appendAlert.js';

export function searchCars(array, div, input) {
  const inputValue = input.value;
  console.log(inputValue);
  const filteredCars = array.filter((e) =>
    e.nome.toLowerCase().includes(inputValue.toLowerCase()),
  );
  if (filteredCars.length === 0) {
    return appendAlert('Nenhum carro encontrado', 'warning');
  }
  createElements(filteredCars, div);
}
