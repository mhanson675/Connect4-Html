
let board = [
    ["X", "X", "X", "X", "X", "X", "X"],
    ["X", "X", "X", "X", "X", "X", "X"],
    ["X", "X", "X", "X", "X", "X", "X"],
    ["X", "X", "X", "X", "X", "X", "X"],
    ["X", "X", "X", "X", "X", "X", "X"],
    ["X", "X", "X", "X", "X", "X", "X"]
]

let currentPlayer = "red";

function selectColumn(column) {

    let playedCell = validColumn(column);

    if (playedCell !== null) {
        claimCell(playedCell, currentPlayer);
        checkWin(playedCell);
        changePlayer();
    } else {
        console.log("Can't play this column");
    }
    
}

function validColumn(column) {

    for (i = 5; i >= 0; i--) {
        let cell = document.getElementById(("cell" + i) + column);
        
        if (!cell.classList.contains("red-owned") && !cell.classList.contains("yellow-owned")) {
            return cell;
        }
    }

    return null;
}

function claimCell(cell, player) {
    let index = cell.id.replace("cell", "");
    let rowIndex = index.slice(0, 1);
    let colIndex = index.slice(1, 2);
    board[rowIndex][colIndex] = player;
    cell.classList.add(player + "-owned");
}

function changePlayer() {
    if (currentPlayer === "red") {
        currentPlayer = "yellow";
    } else {
        currentPlayer = "red";
    }
}

function checkWin(playedCell) {

    let cell = playedCell.id.replace("cell", "");
    let rowIndex = parseInt(cell.slice(0, 1));
    let colIndex = parseInt(cell.slice(1, 2));

    switch (rowIndex) {
        case 0:
        case 1:
        case 2:
            checkWinDown(colIndex, rowIndex);
            break;
        case 3:
        case 4:
        case 5:
            //check up
            break;
    }

    switch (colIndex) {
        case 0:
        case 1:
        case 2:
            checkWinRight(colIndex, rowIndex);
            break;
        case 3:
            checkWinLeft(colIndex, rowIndex);
            checkWinRight(colIndex, rowIndex);
            break;
        case 4:
        case 5:
        case 6:
            checkWinLeft(colIndex, rowIndex);
            break;
    }
}

function checkWinRight(colIndex, rowIndex) {
    console.log("Checking right");

    let match = true;
    let checkColumn = colIndex;
    //check to the right
    while (match && (checkColumn - colIndex) < 4) {
        if (board[rowIndex][checkColumn] !== currentPlayer) {
            match = false;
        }
        checkColumn++;
    }
    
    if (match) {
        console.log("Winner to the right!");
    }
}

function checkWinLeft(colIndex, rowIndex) {
    console.log("Checking left");

    let match = true;
    let checkColumn = colIndex;

    while (match && (colIndex -checkColumn) < 4 ) {
        if (board[rowIndex][checkColumn] !== currentPlayer) {
            match = false;
        }
        checkColumn--;
    }

    if (match) {
        console.log("Winner to the Left!");
    }
}

function checkWinDown(colIndex, rowIndex) {
    console.log("Checking down");

    let match = true;
    let checkRow = rowIndex;
    //check down
    while (match && (checkRow - rowIndex) < 4) {
        if (board[checkRow][colIndex] !== currentPlayer) {
            match = false;
        }
        checkRow++;
    }
    
    if (match) {
        console.log("Winner down!");
    }
}
