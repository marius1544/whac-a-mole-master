let currentMoleTile;
let currentPlantTile;
let score = 0;
let gameOver = false;
let gameStarted = false;

window.onload = function () {
    document.getElementById("startButton").addEventListener("click", startGame);
};

function startGame() {
    if (!gameStarted) {
        gameStarted = true;
        document.getElementById("board").innerHTML = "";
        score = 0;
        gameOver = false;
        document.getElementById("score").innerText = "Score: 0";
        setGame();
    }
}

function setGame() {
    for (let i = 0; i < 9; i++) {
        let tile = document.createElement("div");
        tile.id = i.toString();
        tile.addEventListener("click", selectTile);
        document.getElementById("board").appendChild(tile);
    }

    setTimeout(function () {
        setInterval(setMole, 1500);
        setInterval(setPiranhaPlant, 3000);
    }, 1000);
}

function getRandomTile() {
    let num = Math.floor(Math.random() * 9);
    return num.toString();
}

function setMole() {
    if (gameOver) {
        return;
    }

    if (currentMoleTile) {
        currentMoleTile.innerHTML = "";
    }

    let mole = document.createElement("img");
    mole.src = "./monty-mole.png";

    let num = getRandomTile();
    if (currentPlantTile && currentPlantTile.id == num) {
        return;
    }
    currentMoleTile = document.getElementById(num);
    currentMoleTile.appendChild(mole);
}

function setPiranhaPlant() {
    if (gameOver) {
        return;
    }

    if (currentPlantTile) {
        currentPlantTile.innerHTML = "";
    }

    let plant = document.createElement("img");
    plant.src = "./piranha-plant.png";

    let num = getRandomTile();
    if (currentMoleTile && currentMoleTile.id == num) {
        return;
    }

    currentPlantTile = document.getElementById(num);
    currentPlantTile.appendChild(plant);
}

function selectTile() {
    if (gameOver) {
        return;
    }

    if (this === currentMoleTile) {
        score += 10;
        document.getElementById("score").innerText = score.toString();
    } else if (this === currentPlantTile) {
        document.getElementById("score").innerText = "GAME OVER: " + score.toString();
        gameOver = true;
    }
}
