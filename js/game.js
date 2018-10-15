//obiekt globalny z ustawieniami gry
const game = {
    boardHeight: 7,
    boardWidth: 30,
    defaultSpeed: 200, //szybkość odświerzania w ms
    fasterSpeed: 150,
    fastestSpeed: 100,
    obsticlePoints: 100,
    pickupPoints: 300,
    obsticleClass: {
       // car: ['g-obsticle__car--tug', 'g-obsticle__car--police', 'g-obsticle__car--passenger', 'g-obsticle__car--family'],
        tree: ['g-obsticle__tree--maple', 'g-obsticle__tree--apple', 'g-obsticle__tree--pine', 'g-obsticle__tree--oak'],
        pickup: ['g-pickup--bottle', 'g-pickup--poison', 'g-pickup--mushroom', 'g-pickup--coin']
    },
    turn: 0,
    points: 0,
    lives: 3
}

document.addEventListener("DOMContentLoaded", function (event) {
    console.log("DOM fully loaded and parsed");

    drawBoard();

    placePlayer();

    // GAME MAIN LOOP
    alert(`GAME IS STARTING`);
    let gameInterval = setInterval(gameLoop, game.defaultSpeed);

    //Add player movement
    document.onkeydown = keyPress;

    //Reset

    //Winning condition checking
    function gameLoop() {

        if (game.lives <= 0) {
            clearInterval(gameInterval);
            alert(`GAME OVER \n POINTS: ${game.points}`);
            return;
        } else {
            // random obsticle on random row
            placeObsticle(game.turn);
        }
        moveObsticles();
        collisionDetection();
        game.turn++;
    }
});