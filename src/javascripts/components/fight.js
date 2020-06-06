import printToDom from '../helpers/utils';

let strength = 100;

const tamoFight = () => {
  let domString = '';
  domString += `
    <h3 class="fighting-header">Fighting</h3>
    <div id="counter" class="strength">${strength}</div>
    <button class="run-away-btn btn-plus" id="run-counter">Run Away</button>
    <button class="violence-btn btn-minus" id="violence-counter">Get Violent</button>
  `;

  printToDom.printToDom('#fight', domString);
};

const runAway = () => {
  if (strength === 100) return;
  strength += 1;
  if (strength > 100) strength = 100;
  tamoFight();
};

const squareUp = () => {
  if (strength === 0) return;
  strength -= 10;
  if (strength < 0) strength = 0;
  tamoFight();
};
$('body').on('click', '#run-counter', runAway);
$('body').on('click', '#violence-counter', squareUp);

export default { tamoFight };
