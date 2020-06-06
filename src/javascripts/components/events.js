import progress from './progressBar';
import fun from './fun';
import eat from './eat';
import fight from './fight';
import sleep from './sleep';

const realFunEvent = () => {
  fun.realFun();
  progress.printPercentage();
};

const sortaFunEvent = () => {
  fun.tamoKindaFun();
  progress.printPercentage();
};

const healthyFood = () => {
  eat.countUp();
  progress.printPercentage();
};

const unhealthyFood = () => {
  eat.countDown();
  progress.printPercentage();
};

const runAway = () => {
  fight.runAway();
  progress.printPercentage();
};

const violence = () => {
  fight.squareUp();
  progress.printPercentage();
};

const sleepy = () => {
  sleep.napping();
  progress.printPercentage();
};

const deepSleep = () => {
  sleep.sleep();
  progress.printPercentage();
};


// const eatEvent = () => {
//   eat.
// }

const attachAllEvents = () => {
  $('body').on('click', '#real-fun-counter', realFunEvent);
  $('body').on('click', '#sorta-fun-counter', sortaFunEvent);
  $('body').on('click', '#healthy-counter', healthyFood);
  $('body').on('click', '#unhealthy-counter', unhealthyFood);
  $('body').on('click', '#run-counter', runAway);
  $('body').on('click', '#violence-counter', violence);
  $('body').on('click', '#nap-counter', sleepy);
  $('body').on('click', '#deep-sleep-counter', deepSleep);
};

export default { attachAllEvents };
