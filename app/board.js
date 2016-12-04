//app/board


function createBoard() {
    var board = [100];
    var letter = 1;
    var counter = 1;

    for (var i = 1; i <= 100; i++) {
        board[i] = String.fromCharCode(letter + 64) + counter.toString();
        if (i % 10 == 0) {
            letter += 1;
            counter = 0;
        }
        counter += 1;
    }
    return board;
}

function initializeBoard(board) {
    var s = "";
    
    for (var j = 1; j <= 100; j++) {
        s += board[j] + ' ';
        if (j % 10 == 0) {
            console.log(s);
            s = "";
        }
    }
}


module.exports.createBoard = createBoard;
module.exports.initializeBoard = initializeBoard;
