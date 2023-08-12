let board = ['', '', '', '', '', '', '', '', ''];
let currentPlayer = 'X';
let circleScore = 0;
let crossScore = 0;
let drawScore = 0;

function makeMove(index) {
  if (board[index] === '') {
    board[index] = currentPlayer;
    document.getElementsByClassName('cell')[index].innerText = currentPlayer;

    if (checkWinner()) {
      setTimeout(() => {
        alert(`${currentPlayer} venceu!`);
        updateScore(currentPlayer);
        resetBoard();
      }, 100);
    } else if (board.every(cell => cell !== '')) {
      setTimeout(() => {
        alert('Empate!');
        updateScore(null);
        resetBoard();
      }, 100);
    } else {
      currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
    }
  }
}

function checkWinner() {
  const winPatterns = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8],
    [0, 3, 6], [1, 4, 7], [2, 5, 8],
    [0, 4, 8], [2, 4, 6]
  ];

  for (const pattern of winPatterns) {
    const [a, b, c] = pattern;
    if (board[a] && board[a] === board[b] && board[a] === board[c]) {
      return true;
    }
  }

  return false;
}

function resetBoard() {
  board = ['', '', '', '', '', '', '', '', ''];
  currentPlayer = 'X';
  const cells = document.getElementsByClassName('cell');
  for (const cell of cells) {
    cell.innerText = '';
  }
}

function updateScore(player) {
  if (player === 'X') {
    crossScore++;
    document.getElementById('cross-score').innerText = crossScore;
  } else if (player === 'O') {
    circleScore++;
    document.getElementById('circle-score').innerText = circleScore;
  } else {
    drawScore++;
    document.getElementById('draw-score').innerText = drawScore;
  }
}
