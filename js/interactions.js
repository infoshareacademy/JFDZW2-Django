function findPlayer() {
    let player = document.querySelector('.g-bike').parentElement;
    let row = parseInt(player.dataset.row);
    let col = parseInt(player.dataset.col);
    return [row, col]
}

function keyPress(event) {

    let player = document.querySelector('.g-bike');
    let playerY = parseInt(parentCol(player));
    let playerX = parseInt(parentRow(player));
    
    if (event.keyCode == '38') {
        // up
        if(!game.drunkState[0]){
            playerMoveUp(playerX, playerY, player);
        } else {
            playerMoveDown(playerX, playerY, player);
        }

    } else if (event.keyCode == '40') {
        // down
        if(!game.drunkState[0]){
            playerMoveDown(playerX, playerY, player);
        } else {
            playerMoveUp(playerX, playerY, player);
        }
    }
}

function playerMoveUp(x, y, player){
    if (x <= 0) {} else if (x <= game.boardHeight - 1) {
        let field = findField(x - 1, y);
        field.appendChild(player);
    }
}

function playerMoveDown(x, y, player){
    if (x < game.boardHeight - 1) {
        let field = findField(x + 1, y);
        field.appendChild(player);
    } else if (x >= game.boardHeight - 1) {}
}

function parentCol(elementClass) {
    return elementClass.parentElement.dataset.col;
};

function parentRow(elementClass) {
    return elementClass.parentElement.dataset.row;
};

function moveObsticles() {
    let obsticles = document.querySelectorAll('.obsticle');

    obsticles.forEach(function (obsticle) {
        let obsticleY = parentCol(obsticle);
        let obsticleX = parentRow(obsticle);
        if (obsticleY <= 0) {
            findField(obsticleX, obsticleY).removeChild(obsticle);
            game.points += game.obsticlePoints;
        } else {
            let field = findField(obsticleX, obsticleY - 1);
            field.appendChild(obsticle);
        }
    });
}

function collisionDetection() {
    let obsticles = document.querySelectorAll('.obsticle');
    let player = document.querySelector('.player');
    let playerX = parentRow(player);
    let playerY = parentCol(player);
    obsticles.forEach((x) => {
        let obsticleX = parentRow(x);
        let obsticleY = parentCol(x);
        if (playerX === obsticleX && playerY === obsticleY) {
            //tutaj funkcja collisionEffect()
            collisionEffect(x, player);
            findField(obsticleX, obsticleY).removeChild(x);
            
        }
    });
}

function collisionEffect(obsticle, player) {
    let obsticleClass = obsticle.classList[1];
    if(obsticleClass === game.obsticles.pickupGood.obsticleClass[1]){
        game.points += 1000;
        playAudio('coin', 'wav');
        console.log('moneyyyyy', game.points);
    } else if (obsticleClass === game.obsticles.pickupGood.obsticleClass[0]){
        if(game.lives < 3){
            game.lives++;
        }
        playAudio('1-up', 'wav');
        console.log('mushroom', game.lives);
    } else if (obsticleClass === game.obsticles.pickupBad.obsticleClass[0]){
        game.points -= 1000;
        playAudio('bottle', 'wav');
        console.log('poison', game.points);
    } else if (obsticleClass === game.obsticles.pickupBad.obsticleClass[1]){
        game.drunkState[0] = true;
        game.drunkState[1] = game.turn + 50;
        player.classList.add('player-alco');
        console.log('alco', game.drunkState, game.turn);
        playAudio('gulp', 'mp3');
    } else {
        game.lives--;
        playAudio('crash', 'mp3');
    }
}

function alcoEffectReset(){
    if(game.turn === game.drunkState[1]){
        game.drunkState[0] = false;
        let player = document.querySelector('.player');
        player.classList.remove('player-alco');
    }
}

function playAudio(name, format){
    let audio = new Audio(`../sound/${name}.${format}`);
    audio.play();
}