import printToDom from '../helpers/utils';


let full = 100;

const tamoEat = () => {
  let domString = '';
  domString += `
    <div id="counter">${full}</div>
    <button class="healthy-btn" id="healthy-counter">Healthy Food</button>
    <button class="unhealthy-btn" id="unhealthy-counter">Unhealthy Food</button>
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
$('body').on('click', '#healthy-counter', countUp);
$('body').on('click', '#unhealthy-counter', countDown);

export default { tamoEat };
