import UI from './modules/UI.js';
import Game from './modules/Games.js';
import './style.css';

const baseURL = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/';
const id = 'oQNAEST2apGVZIoxn0tw';
const url = `${baseURL}games/${id}/scores`;

const ui = new UI();
const newGame = new Game();

// submit score
const add = document.querySelector('.submit');
add.addEventListener('click', (e) => {
  e.preventDefault();
  const userInfo = ui.getUser();
  newGame.addScore(userInfo.user, userInfo.score, url);
});

const refresh = document.querySelector('.refresh');
refresh.addEventListener('click', () => {
  const fetchedData = newGame.fetchData(url);
  UI.resetBoard();
  fetchedData.then((result) => {
    const sortedList = Game.sortLeaders(Array.from(result));
    UI.refreashBoard(sortedList);
  });
});

window.addEventListener('load', () => {
  const fetchedData = newGame.fetchData(url);
  UI.resetBoard();
  fetchedData.then((result) => {
    const sortedList = Game.sortLeaders(Array.from(result));
    UI.refreashBoard(sortedList);
  });
});
