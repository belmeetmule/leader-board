export default class UI {
  static resetBoard() {
    const list = document.querySelector('.score-list');
    list.innerHTML = '';
  }

  static refreashBoard(game) {
    const list = document.querySelector('.score-list');
    const li = document.createElement('li');
    li.innerHTML = `${game.user}: ${game.score}`;
    list.appendChild(li);
  }

  // get user and score from the UI
  getUser() {
    const userOb = {};
    const user = document.getElementById('name');
    const score = document.getElementById('score');
    if (user.value !== '' && typeof parseInt(score.value, 10) === 'number') {
      userOb.user = user.value;
      userOb.score = parseInt(score.value, 10);
      user.value = '';
      score.value = '';
    } else {
      this.alert('Please enter valid data');
    }
    return userOb;
  }
}
