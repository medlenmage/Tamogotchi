import 'bootstrap';
import '../styles/main.scss';
import eatDom from './components/eat';
import tamoFun from './components/fun';


const init = () => {
  eatDom.tamoEat();
  tamoFun.tamoFun();
};

init();
