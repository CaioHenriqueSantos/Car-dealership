import { cars } from '../dados/cars.js';
import { createElements } from '../scripts/createElements.js';

export function filterCars({ value }, div) {
  switch (value) {
    case '1':
      const newCars = cars.sort((a, b) => a.price - b.price);
      createElements(newCars, div);
      break;
    case '2':
      const newCars2 = cars.sort((a, b) => b.price - a.price);
      createElements(newCars2, div);
      break;

    default:
      break;
  }
}
