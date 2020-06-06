import eatDom from '../../components/eat';
import tamoFun from '../../components/fun';
import squareUp from '../../components/fight';
import naps from '../../components/sleep';

const printToDoms = [eatDom.tamoEat(), tamoFun.tamoFun(), squareUp.tamoFight(), naps.tamoSleep()];

const getDoms = () => printToDoms;

export default { getDoms };