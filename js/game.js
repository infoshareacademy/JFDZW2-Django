document.addEventListener("DOMContentLoaded", function (event) {
    console.log("DOM fully loaded and parsed");

    drawBoard();
    placePlayer();
    showLives();
    //Add player movement
    document.onkeydown = keyPress;
    let gameInterval;

    // GAME MAIN LOOP
    initScreen();

    //Reset

    //Winning condition checking
    function gameLoop() {
        collisionDetection();
        alcoEffectReset();
        if (game.lives <= 0) {
            clearInterval(gameInterval);
            playAudio('game_over', 'wav');

            let modal = document.querySelector('.c-modal');
            modal.innerHTML = '';
            let insideModal = document.createElement('div');
            insideModal.classList.add('c-modal-content');
            insideModal.innerHTML = `Points: ${game.points}`;
            modal.appendChild(insideModal);
            modal.style.display = '';
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

    // init screen function
    function initScreen() {
        let btn = document.querySelector('.js-startBtn');
        let modal = document.querySelector('.c-modal');
        btn.addEventListener('click', function () {
            gameInterval = setInterval(gameLoop, game.defaultSpeed);
            modal.style.display = 'none';
        });
    }
});