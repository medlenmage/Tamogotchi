import 'bootstrap';
import '../styles/main.scss';
import ptdFunctions from './helpers/data/ptdFunctions';
import events from './components/events';

const init = () => {
  ptdFunctions.getDoms();
  events.attachAllEvents();
};

init();
