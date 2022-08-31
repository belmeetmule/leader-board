import { scores } from './modules/scores.js';
import './style.css';

function addScore(score) {
  const list = document.querySelector('.score-list');
  const li = document.createElement('li');
  li.innerHTML = `${score.name}: ${score.score}`;
  list.appendChild(li);
}

scores.forEach((i) => {
  addScore(i);
});