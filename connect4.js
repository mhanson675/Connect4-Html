
const board = [
    [00, 01, 02, 03, 04, 05, 06],
    [10, 11, 12, 13, 14, 15, 16],
    [20, 21, 22, 23, 24, 25, 26],
    [30, 31, 32, 33, 34, 35, 36],
    [40, 41, 42, 43, 44, 45, 46],
    [50, 51, 52, 53, 54, 55, 56]
]

function selectColumn(column) {

    let playedCell = validColumn(column);

    if (playedCell !== null) {
        claimCell(playedCell, 'red');
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
    cell.classList.add(player + "-owned");
}