import printToDom from '../helpers/utils';

let fun = 50;

const getFun = () => fun;

const tamoFun = () => {
  let domString = '';
  domString += `
    <h3 class="fun-header">Play Time</h3>
    <div id="counter" class="fun">${fun}</div>
    <button class="real-fun-btn btn-plus" id="real-fun-counter">Real Fun</button>
    <button class="sorta-fun-btn btn-plus" id="sorta-fun-counter">Sorta Fun</button>
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

export default {
  tamoFun,
  getFun,
  realFun,
  tamoKindaFun,
};
