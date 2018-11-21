document.addEventListener("DOMContentLoaded", function (event) {
    console.log("DOM fully loaded and parsed");

    // initialization
    resetButton();
    drawBoard();
    placePlayer();
    showLives();

    // Add player movement
    document.onkeydown = keyPress;

    // GAME MAIN LOOP
    initScreen();

    // Winning condition checking
    function gameLoop() {
        collisionDetection();
        alcoEffectReset();
        if (game.lives <= 0) {
            clearInterval(game.gameInterval);
            playAudio('game_over', 'wav');

            let modal = document.querySelector('.c-modal');
            modal.innerHTML = '';
            let insideModal = document.createElement('div');
            insideModal.classList.add('c-modal-content');



            // INSERT HALL OF FAME HERE
            insideModal.innerText = `Points: ${game.points}`;




            modal.appendChild(insideModal);

            let deeperInsideModal = document.querySelector('.c-modal-content');
            let resetBtn = document.createElement('div');
            resetBtn.classList.add('js-btn--reset', 'c-btn');
            resetBtn.innerText = 'Reset';
            deeperInsideModal.appendChild(resetBtn);

            modal.style.display = '';
            resetButton();
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
            game.gameInterval = setInterval(gameLoop, game.defaultSpeed);
            modal.style.display = 'none';
        });
    }

    //game reset function
    function resetButton() {
        const resetButton = document.querySelectorAll('.js-btn--reset');
        resetButton.forEach((x) => {
            x.addEventListener('click', () => {
                clearInterval(game.gameInterval);
                deleteOnboardElements();
                game = {
                    ...initialSettings
                }
                game.board.classList.remove('alco-effect');
                placePlayer();
                game.gameInterval = setInterval(gameLoop, game.defaultSpeed);

                let modal = document.querySelector('.c-modal');
                modal.style.display = 'none';
            });

        });

    }

    // delete all onboard elements
    function deleteOnboardElements() {
        const targetonboardElements = document.querySelectorAll('.g-field');
        targetonboardElements.forEach((item) => {
            if (item.childNodes.length > 0) {
                item.removeChild(item.childNodes[0]);
            }
        });
    }




});