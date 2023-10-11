let ids = []; // Array to store unique IDs
let checkCount = 0;
let penalty = 0;
let lastCheck = 0;
let treasureLocation = 5;
let trapLocation = 18;
let gameOver = false;

function check(position) {
    if (gameOver) return;

    let id = ids[position];
    let imgElement = document.getElementById(id);

    

    checkCount++;
    penalty++;
    
    let locationsElement = document.getElementById('locations');
    locationsElement.textContent = `Locations: ${checkCount}`;

    if (position === treasureLocation) {
        gameOver = true;
        penalty -= 3;
    } else if (position === trapLocation) {
        gameOver = true;
        penalty += 4;
    }

    let penaltyElement = document.getElementById('penalty');
    penaltyElement.textContent = `Penalty: ${penalty}`;

    lastCheck = position;
}


function help(lastPosition, treasurePosition) {
    const lastRow = Math.floor(lastPosition / 5);
    const lastCol = lastPosition % 5;
    const treasureRow = Math.floor(treasurePosition / 5);
    const treasureCol = treasurePosition % 5;

    const rowDiff = Math.abs(lastRow - treasureRow);
    const colDiff = Math.abs(lastCol - treasureCol);

    if ((rowDiff === 1 && colDiff === 0) || (rowDiff === 0 && colDiff === 1)) {
        return "Can smell it";
    } else if (rowDiff + colDiff === 2) {
        return "Close Matie";
    } else {
        return "Step faster";
    }
}

let position = 0;

function getHelp() {
    const lastPosition = parseInt(prompt("Enter your last position (0-24):"));
    const treasurePosition = parseInt(prompt("Enter the treasure position (0-24):"));
    const result = help(lastPosition, treasurePosition);

    penalty += 2;
    document.getElementById("penalty").textContent = "Penalty: " + penalty;
    document.getElementById("help").textContent = "Help: " + result;
}

function checkPosition(position) {
    getHelp();
}
