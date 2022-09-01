export default class UI {
  refreashBoard( game ) {
    const list = document.querySelector('.score-list');
    const li = document.createElement('li');
    li.innerHTML = `${ game.name }: ${ game.score }`;
    list.appendChild(li);
}
// gets the values from the caller 
postGames ( user, score ) {
  return this.true;
}
}