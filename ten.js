function isCorrect(answer) {
  document.querySelector('.feedback').innerHTML = answer === 'Lightbulb' ? 'Correct! The lightbulb is made of white hot tungsten that is over 2000 celcius' : 'Incorrect! Try again.'
}