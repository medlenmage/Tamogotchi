import printToDom from '../helpers/utils';

let energy = 50;

const tamoSleep = () => {
  let domString = '';
  domString += `
    <h3>Sleeping</h3>
    <div id="counter">${energy}</div>
    <button class="nap-btn" id="nap-counter">Nappy Nap</button>
    <button class="deep-sleep-btn" id="deep-sleep-counter">Going to bed</button>
  `;

  printToDom.printToDom('#sleep', domString);
};

const napping = () => {
  if (energy === 100) return;
  energy += 50;
  if (energy > 100) energy = 100;
  tamoSleep();
};

const sleep = () => {
  if (energy === 100) return;
  energy += 60;
  if (energy > 100) energy = 100;
  tamoSleep();
};
$('body').on('click', '#nap-counter', napping);
$('body').on('click', '#deep-sleep-counter', sleep);

export default { tamoSleep };
