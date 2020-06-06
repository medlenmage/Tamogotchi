import eatValue from './eat';
import funValue from './fun';
import fightValue from './fight';
import sleepValue from './sleep';
import doms from '../helpers/utils';


const printPercentage = () => {
  const eat = eatValue.getFull();
  const fun = funValue.getFun();
  const fight = fightValue.getStrength();
  const sleep = sleepValue.getEnergy();

  const maxValue = 400;
  let total = eat + fun + fight + sleep;
  total *= 100;
  total /= maxValue;
  let domString = '';
  domString += `
    <h1>Health Bar: ${total}</h1>
  `;
  doms.printToDom('#progress', domString);
};

export default { printPercentage };
