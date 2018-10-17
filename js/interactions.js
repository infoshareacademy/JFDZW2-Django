function findPlayer() {
    let player = document.querySelector('.g-bike').parentElement;
    let row = parseInt(player.dataset.row);
    let col = parseInt(player.dataset.col);
    return [row, col]
}
//TODO: przepisać poruszanie za pomocą funkcji parentCol/Row i appendChild
function keyPress(event) {

    let playerCords = findPlayer();
    findField(playerCords[0], playerCords[1]);
    if (event.keyCode == '38') {
        // up
        if (playerCords[0] <= 0) {} else if (playerCords[0] <= game.boardHeight - 1) {
            removeFigure('.g-bike');
            placeFigure('g-bike', 'player', (playerCords[0] - 1), playerCords[1]);
        }

    } else if (event.keyCode == '40') {
        // down
        if (playerCords[0] < game.boardHeight - 1) {
            removeFigure('.g-bike');
            placeFigure('g-bike', 'player', playerCords[0] + 1, playerCords[1]);
        } else if (playerCords[0] >= game.boardHeight - 1) {

        }
    }
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
            game.lives--;
            findField(obsticleX, obsticleY).removeChild(x);
            alert(`COLLISION! \n LIVES: ${game.lives} \n POINTS: ${game.points}`);
        }
    });
}