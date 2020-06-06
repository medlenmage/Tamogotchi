import printToDom from '../helpers/utils';

let fun = 50;

const tamoFun = () => {
  let domString = '';
  domString += `
    <h3>Play Time</h3>
    <div id="counter">${fun}</div>
    <button class="real-fun-btn" id="real-fun-counter">Real Fun</button>
    <button class="sorta-fun-btn" id="sorta-fun-counter">Sorta Fun</button>
  `;

  printToDom.printToDom('#play', domString);
};

const realFun = () => {
  if (fun === 100) return;
  fun += 10;
  if (fun > 100) fun = 100;
  tamoFun();
};

const tamoKindaFun = () => {
  if (fun === 100) return;
  fun += 2;
  if (fun > 0) fun = 100;
  tamoFun();
};
$('body').on('click', '#real-fun-counter', realFun);
$('body').on('click', '#sorta-fun-counter', tamoKindaFun);

export default { tamoFun };
