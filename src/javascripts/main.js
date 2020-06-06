import 'bootstrap';
import '../styles/main.scss';
import eatDom from './components/eat';
import tamoFun from './components/fun';
import squareUp from './components/fight';


const init = () => {
  eatDom.tamoEat();
  tamoFun.tamoFun();
  squareUp.tamoFight();
};

init();
