import UI from './modules/UI.js';
import Game from './modules/Games.js';
import './style.css';

const baseURL = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/';
const id = 'oQNAEST2apGVZIoxn0tw';
const url = `${baseURL}games/${id}/scores`;

const ui = new UI();
const newGame = new Game();

/* const gameInfo = newGame.addGame({name: 'Gena'}, `${baseURL}games/`);
let gameId;
gameInfo.then((result) => {
  let theStr = result[Object.keys(result)[0]].split(' ');
  gameId =  theStr[theStr.length-2]
  console.log('toString: ' + gameId);
}); */

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
    result.forEach((i) => {
      UI.refreashBoard(i);
    });
  });
});

window.addEventListener('load', () => {
  const fetchedData = newGame.fetchData(url);
  UI.resetBoard();
  fetchedData.then((result) => {
    result.forEach((i) => {
      UI.refreashBoard(i);
    });
  });
});
