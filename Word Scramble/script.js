const words = [
    'Creeper',
    'Enderman',
    'Redstone',
    'Nether',
    'Crafting',
    'Pickaxe',
    'Zombie',
    'Skeleton',
    'Diamond',
    'Village',
    'Portal',
    'Herobrine',
    'Bedrock',
    'Potion',
    'Enchant',
  ];
  
  let currentWord = '';
  let scrambledWord = '';
  let mistakes = [];
  let errorCount = 0;
  
  function scrambleWord(word) {
    const array = word.split('');
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array.join('');
  }
  
  function setNewWord() {
    currentWord = words[Math.floor(Math.random() * words.length)].toLowerCase();
    scrambledWord = scrambleWord(currentWord);
    document.getElementById('wordDisplay').textContent = scrambledWord.toUpperCase();
  }
  
  function resetGame() {
    document.getElementById('userInput').value = '';
    mistakes = [];
    errorCount = 0;
    document.getElementById('mistakeList').innerHTML = '';
  }
  
  function updateMistakes(input) {
    mistakes = [];
    for (let i = 0; i < input.length; i++) {
      if (input[i] !== currentWord[i]) {
        mistakes.push(input[i]);
      }
    }
    document.getElementById('mistakeList').innerHTML = mistakes.map(m => `<li>${m.toUpperCase()}</li>`).join('');
    errorCount = mistakes.length;
  }
  
  function checkWinCondition(input) {
    if (errorCount >= 6) {
      alert('You have made too many mistakes!');
      resetGame();
    } else if (input === currentWord) {
      alert('Congratulations, you won!');
      setNewWord();
      resetGame();
    }
  }
  
  document.getElementById('randomButton').addEventListener('click', () => {
    setNewWord();
    resetGame();
  });
  
  document.getElementById('resetButton').addEventListener('click', resetGame);
  
  document.getElementById('userInput').addEventListener('input', (e) => {
    const input = e.target.value.toLowerCase();
    if (input.length <= currentWord.length) {
      updateMistakes(input);
      checkWinCondition(input);
    }
  });
  
  // Inicializa el juego con una palabra al azar
  setNewWord();
  