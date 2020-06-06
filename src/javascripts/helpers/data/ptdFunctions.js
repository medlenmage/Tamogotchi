import eatDom from '../../components/eat';
import tamoFun from '../../components/fun';
import squareUp from '../../components/fight';
import naps from '../../components/sleep';
import percentage from '../../components/progressBar';

const printToDoms = [eatDom.tamoEat(), tamoFun.tamoFun(), squareUp.tamoFight(), naps.tamoSleep(), percentage.printPercentage()];

const getDoms = () => printToDoms;

export default { getDoms };
