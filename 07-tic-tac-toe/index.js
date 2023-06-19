  // Game variables
  let currentPlayer = 'X';
  let gameBoard = ['', '', '', '', '', '', '', '', ''];
  const winningCombinations = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ];

  const squares = Array.from(document.querySelectorAll('.board div'));
  const messageElement = document.querySelector('.message');

  // Function to make a move
  function makeMove(index) {
    if (gameBoard[index] === '') {
      gameBoard[index] = currentPlayer;
      squares[index].textContent = currentPlayer;
      squares[index].style.color = currentPlayer === 'X' ? 'red' : 'blue';

      if (checkWin()) {
        messageElement.innerHTML = 'Player <span>' + currentPlayer + '</span> wins!';
        disableBoard();
      } else if (checkDraw()) {
        messageElement.textContent = 'It\'s a draw!';
        disableBoard();
      } else {
        currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
      }
    }
  }

  // Function to check for a win
  function checkWin() {
    return winningCombinations.some(combination => {
      return combination.every(index => gameBoard[index] === currentPlayer);
    });
  }

  // Function to check for a draw
  function checkDraw() {
    return gameBoard.every(cell => cell !== '');
  }

  // Function to disable the game board
  function disableBoard() {
    squares.forEach(square => {
      square.style.pointerEvents = 'none';
    });
  }

  // Function to enable the game board
  function enableBoard() {
    squares.forEach(square => {
      square.style.pointerEvents = 'auto';
    });
  }

  // Function to reset the game
  function reset() {
    currentPlayer = 'X';
    gameBoard = ['', '', '', '', '', '', '', '', ''];
    squares.forEach(square => {
      square.textContent = '';
      square.style.color = 'black';
    });
    messageElement.textContent = '';
    enableBoard();
  }