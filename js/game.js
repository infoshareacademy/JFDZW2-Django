//obiekt globalny z ustawieniami gry
const game = {
    boardHeight: 7,
    boardWidth: 20, // optymalnie 4 x boardHeight
    defaultSpeed: 200, //szybkość odświerzania w ms
    fasterSpeed: 150,
    fastestSpeed: 100,
    obsticlePoints: 100,
    pickupPoints: 300,
    obsticles: {    
        tree: {
            obsticleClass: ['g-obsticle__tree--maple', 'g-obsticle__tree--apple', 'g-obsticle__tree--pine', 'g-obsticle__tree--oak'],
            appearInterval: 3
        },
        pickupGood: {
            obsticleClass: ['g-pickup--mushroom', 'g-pickup--coin'],
            appearInterval: 11
        },
        pickupBad: {
            obsticleClass: ['g-pickup--poison', 'g-pickup--bottle'],
            appearInterval: 5
        }
        //pickupLife
    },
    drunkState: [false, undefined],
    turn: 0,
    points: 0,
    lives: 3
}

document.addEventListener("DOMContentLoaded", function (event) {
    console.log("DOM fully loaded and parsed");

    drawBoard();

    placePlayer();

    showLives();

    // GAME MAIN LOOP
    alert(`GAME IS STARTING`);
    let gameInterval = setInterval(gameLoop, game.defaultSpeed);

    //Add player movement
    document.onkeydown = keyPress;

    //Reset

    //Winning condition checking
    function gameLoop() {
        collisionDetection();
        alcoEffectReset();
        if (game.lives <= 0) {
            clearInterval(gameInterval);
            playAudio('game_over', 'wav');
            alert(`GAME OVER \n POINTS: ${game.points}`);
            return;
        } else {
            // random obsticle on random row
            placeAllObsticles(game.turn);
        }
        backgrounMovementIllusion('.g-field', 'g-field-1');
        backgrounMovementIllusion('.g-bike', 'g-bike-1');
        moveObsticles();
        collisionDetection();
        showLives();
        writeScore();
        game.turn++;
    }
});