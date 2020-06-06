import 'bootstrap';
import '../styles/main.scss';
import eatDom from './components/eat';
import tamoFun from './components/fun';
import squareUp from './components/fight';
import naps from './components/sleep';


const init = () => {
  eatDom.tamoEat();
  tamoFun.tamoFun();
  squareUp.tamoFight();
  naps.tamoSleep();
};

init();
