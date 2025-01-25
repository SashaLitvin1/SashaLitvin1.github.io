// The pieces' Unicode representations
const pieces = {
    'r': '♜', 'n': '♞', 'b': '♝', 'q': '♛', 'k': '♚', 'p': '♟',
    'R': '♖', 'N': '♘', 'B': '♗', 'Q': '♕', 'K': '♔', 'P': '♙'
};

// Initial board setup (starting positions)
const initialBoard = [
    ['r', 'n', 'b', 'q', 'k', 'b', 'n', 'r'],
    ['p', 'p', 'p', 'p', 'p', 'p', 'p', 'p'],
    ['', '', '', '', '', '', '', ''],
    ['', '', '', '', '', '', '', ''],
    ['', '', '', '', '', '', '', ''],
    ['', '', '', '', '', '', '', ''],
    ['P', 'P', 'P', 'P', 'P', 'P', 'P', 'P'],
    ['R', 'N', 'B', 'Q', 'K', 'B', 'N', 'R']
];

// Select the board container
const board = document.querySelector('.board');

// Function to create the chessboard
function createBoard() {
    // Loop through each row and column to create squares
    for (let row = 0; row < 8; row++) {
        for (let col = 0; col < 8; col++) {
            const square = document.createElement('div');
            const isLight = (row + col) % 2 === 0; // Alternate between light and dark squares
            square.classList.add('square', isLight ? 'light' : 'dark');
            
            // Place the piece if there is one at this position
            const piece = initialBoard[row][col];
            if (piece) {
                square.innerHTML = `<span class="piece">${pieces[piece]}</span>`;
            }
            
            board.appendChild(square);
        }
    }
}

// Initialize the board when the page loads
createBoard();
