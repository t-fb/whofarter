const choices = ['hank', 'olivia', 'trixy'];
let guesses = 3;

function theFarter() {
  return choices[Math.floor(Math.random() * choices.length)];
}
let culprit = theFarter();
// console.log(culprit);

document.querySelector('.repeat').addEventListener('click', function () {
  culprit = theFarter();
  console.log(culprit);
  guesses = 3;
  document.querySelector('.score').textContent = guesses;
  document.querySelector('.message').textContent = 'Start guessing...';
});

document.querySelector('.buttonH').addEventListener('click', function () {
  const farterH = 'hank';
  if (farterH === culprit) {
    document.querySelector('.message').textContent =
      'Correct! Now go wipe his bumbum 🧻';
  } else if (farterH !== culprit) {
    document.querySelector('.message').textContent =
      'Dont blame the dog 🤦🏻‍♀️ Guess again!';
    guesses--;
    document.querySelector('.score').textContent = guesses;
    if (guesses === 0) {
      document.querySelector('.message').textContent =
        'The farter got away!💨🏃 Click reset!';
    }
  }
});

document.querySelector('.buttonO').addEventListener('click', function () {
  const farterO = 'olivia';
  if (farterO === culprit) {
    document.querySelector('.message').textContent =
      'It was Olivia! Girlys do fart 😂';
  } else if (farterO !== culprit) {
    document.querySelector('.message').textContent =
      'Wrong! Girls dont fart!💅 Guess Again!';
    guesses--;
    document.querySelector('.score').textContent = guesses;
    if (guesses === 0) {
      document.querySelector('.message').textContent =
        'The farter got away!💨🏃 Click reset!';
    }
  }
});
document.querySelector('.buttonT').addEventListener('click', function () {
  const farterT = 'trixy';
  if (farterT === culprit) {
    document.querySelector('.message').textContent =
      'You got it!! NOW RUN OUT THE ROOM!!💩🤢';
  } else if (farterT !== culprit) {
    document.querySelector('.message').textContent =
      'Wrong! Girls dont fart!💅 Guess Again!';
    guesses--;
    document.querySelector('.score').textContent = guesses;
    if (guesses === 0) {
      document.querySelector('.message').textContent =
        'The farter got away!💨🏃 Click reset!';
    }
  }
});
