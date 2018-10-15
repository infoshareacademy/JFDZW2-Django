//obiekt globalny z ustawieniami gry
const game = {
    boardHeight: 5,
    boardWidth: 20,
    defaultSpeed: 100, //szybkość odświerzania w ms
    fasterSpeed: 200,
    fastestSpeed: 300,
    obsticlePoints: 100,
    pickupPoints: 300,
    obsticleClass: {
        car: ['g-obsticle__car--tug', 'g-obsticle__car--police', 'g-obsticle__car--passenger', 'g-obsticle__car--family'],
        tree: ['g-obsticle__tree--maple', 'g-obsticle__tree--apple', 'g-obsticle__tree--pine', 'g-obsticle__tree--oak'],
        pickup: ['g-pickup--bottle', 'g-pickup--poison', 'g-pickup--mushroom', 'g-pickup--coin']
    },
    turn: 4,
    points: 0,
    lives: 3
}

document.addEventListener("DOMContentLoaded", function (event) {
    console.log("DOM fully loaded and parsed");

    //Draw board
    drawBoard();

    //Draw pawns
    placeFigure("g-bike", 'player', 2, 4);
    // GAME MAIN LOOP
    alert(`GAME IS STARTING`);
    let gameInterval = setInterval(gameLoop, game.defaultSpeed);

    //Add movement
    document.onkeydown = keyPress;


    //Reset



    //Winning condition checking
    function gameLoop() {
        if (game.turn % 4 === 0) {
            // random obsticle on random row
            placeFigure(randomObsticle("tree"), 'obsticle', Math.floor(Math.random() * game.boardHeight), game.boardWidth - 1);
        } else if (game.lives === 0) {
            clearInterval(gameInterval);
            alert(`GAME OVER
POINTS: ${game.points}`);
            return;
        }
        moveObsticles();
        collisionDetection();
        game.turn++;
    }
});