import { scores } from './modules/scores.js';
import UI from './modules/UI';
import './style.css';

const update = new UI();
scores.forEach((i) => {
  update.refreashBoard(i);
  //addScore(i);
});