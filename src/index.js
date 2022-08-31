import _ from 'lodash';
import {scores} from './modules/scores.js';
import './style.css';

function addScore(score) {
    const list = document.querySelector('.score-list');
    const li = document.createElement('li');
    li.innerHTML = score.name + ': '+ score.score;
    list.appendChild(li);
  }
  
  console.log(scores);
scores.forEach(i => {
  addScore(i);
}) 