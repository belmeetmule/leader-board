export default class UI {
  static resetBoard() {
    const list = document.querySelector('.score-list');
    list.innerHTML = '';
  }

  static refreashBoard(scoreList) {
    scoreList.forEach((s, index) => {
      const list = document.querySelector('.score-list');
      const li = document.createElement('li');

      const rank = document.createElement('span');
      rank.classList.add('rank');
      const score = document.createElement('span');
      score.classList.add('score');
      const player = document.createElement('span');
      player.classList.add('player');

      rank.innerHTML = index + 1;
      score.innerHTML = `${s.score}`;
      player.innerHTML = index === 0 ? `${s.user} <i class="fas fa-trophy"></i>` : `${s.user}`;
      // li.innerHTML = `${s.user}: ${s.score}`;
      li.appendChild(rank);
      li.appendChild(player);
      li.appendChild(score);

      list.appendChild(li);
    });
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
