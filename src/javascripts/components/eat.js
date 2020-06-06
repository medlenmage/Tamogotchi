import printToDom from '../helpers/utils';


let full = 100;

const getFull = () => full;

const tamoEat = () => {
  let domString = '';
  domString += `
    <h3 class="eating-header">Eatting</h3>
    <div id="counter" class="eating">${full}</div>
    <button class="healthy-btn btn-plus" id="healthy-counter">Healthy Food</button>
    <button class="unhealthy-btn btn-minus" id="unhealthy-counter">Unhealthy Food</button>
  `;

  printToDom.printToDom('#eat', domString);
};

const countUp = () => {
  if (full === 100) return;
  full += 10;
  if (full > 100) full = 100;
  tamoEat();
};

const countDown = () => {
  if (full === 0) return;
  full -= 3;
  if (full < 0) full = 0;
  tamoEat();
};

export default {
  tamoEat,
  getFull,
  countUp,
  countDown,
};
