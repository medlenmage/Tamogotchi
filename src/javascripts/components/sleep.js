import printToDom from '../helpers/utils';

let energy = 50;

const getEnergy = () => energy;

const tamoSleep = () => {
  let domString = '';
  domString += `
    <h3 class="sleep-header">Sleeping</h3>
    <div id="counter" class="energy">${energy}</div>
    <button class="nap-btn btn-plus" id="nap-counter">Nappy Nap</button>
    <button class="deep-sleep-btn btn-plus" id="deep-sleep-counter">Going to bed</button>
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


export default {
  tamoSleep,
  getEnergy,
  napping,
  sleep,
};
