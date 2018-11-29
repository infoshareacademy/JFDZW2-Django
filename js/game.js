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

            const modal = document.querySelector('.c-modal');
            modal.innerHTML = '';
            const insideModal = document.createElement('div');
            insideModal.classList.add('c-modal-content', 'g-score');


            const gameEndText = `<h1>Congratulations !!! You have: ${game.points} points</h1>`
            insideModal.insertAdjacentHTML('beforeend', gameEndText);

            modal.appendChild(insideModal);
            const deeperInsideModal = document.querySelector('.c-modal-content');

            saveScore(deeperInsideModal, () => {
                const addScore = document.querySelector('#js-addBtn');
                addScore.addEventListener('click', () => {

                    const inputValue = document.querySelector('#js-input');
                    const scoreTable = document.querySelector('#js-score');

                    const playerName = inputValue.value;

                    if(playerName){
                        const getScore = getItem('results') || [];
                    getScore.push({
                        userName: playerName,
                        userPoints: game.points
                    })
                    const scoreSort = getScore.sort((a, b)=>{
                        return b.userPoints - a.userPoints;
                    })
                    if(scoreSort.length > 10){
                        scoreSort.pop();
                    }
                    scoreSort.forEach((elem, i)=>{
                        const template = `
                        <h3 class="center">${i+1}.   ${elem.userName} - ${elem.userPoints}</h3>
                        `
                        scoreTable.insertAdjacentHTML('beforeend', template);
                    });
                    setItem('results', scoreSort)


                    removeElem('#js-scoreIpnut')
                    showScore();

                    }
                })
            });




            let resetBtn = document.createElement('div');
            resetBtn.classList.add('js-btn--reset', 'c-btn');
            resetBtn.innerText = 'Reset';
            deeperInsideModal.appendChild(resetBtn);
            modal.style.display = '';

            //showScore();
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
                game.drunkState[0] = false;
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

    function removeElem(elemId) {
        var elem = document.querySelector(elemId);
        elem.parentNode.removeChild(elem);
    }


});