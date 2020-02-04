var grid = {};

function showGrid() {
    var str = "";
    for (var i = 1; i <= 9; i++) {
        var v = grid[i];
        if (v == -1) str += "O";
        if (v == 1) str += "X";
        if (v == null) str += "_";
        if (i % 3 == 0) {
            str += "\n"
        } else str += "|";
    }
    console.log(str);
};

function isFull() {
    for (var i = 1; i <= 9; i++) {
        var v = grid[i];
        if (v == null) return false;
    }
    return true;
};

function hasWon(player) {
    if (grid[5] == player && grid[4] == player && grid[6] == player) return true;
    if (grid[1] == player && grid[2] == player && grid[3] == player) return true;
    if (grid[1] == player && grid[4] == player && grid[7] == player) return true;
    if (grid[3] == player && grid[6] == player && grid[9] == player) return true;
    if (grid[7] == player && grid[8] == player && grid[9] == player) return true;
    if (grid[2] == player && grid[5] == player && grid[8] == player) return true;
    if (grid[3] == player && grid[5] == player && grid[7] == player) return true;
    if (grid[1] == player && grid[5] == player && grid[9] == player) return true;
    return false;
};

function computerMove() {
    while (true) {
        var pos = getRandomInt();
        if (grid[pos] == null) {
            grid[pos] = -1;
            return;
        }
    }
};

function getRandomInt() {
    return Math.floor(Math.random() * 9) + 1;
}


while (!hasWon(1) && !hasWon(-1) && !isFull()) {
    var pos = prompt("Enter position (1 - 9)");
    if (grid[pos] == null) {
        grid[pos] = 1;
        computerMove();
    }
    showGrid();
}

if (hasWon(1)) {
    alert("Player won!");
} else if (hasWon(-1)) {
    alert("Computer won!");
} else {
    alert("It's a tie!");
}


