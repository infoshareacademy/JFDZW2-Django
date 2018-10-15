function findPlayer() {
    let player = document.querySelector('.g-bike').parentElement;
    let row = parseInt(player.dataset.row);
    let col = parseInt(player.dataset.col);
    return [row, col]
}




function keyPress(event) {

    let playerCords = findPlayer();
    findField(playerCords[0], playerCords[1]);
    if (event.keyCode == '38') {
        // up
        if (playerCords[0] <= 0) {} else if (playerCords[0] <= game.boardHeight - 1) {
            removeFigure('.g-bike');
            placeFigure('g-bike', 'player',(playerCords[0] - 1), playerCords[1]);
        }

    } else if (event.keyCode == '40') {
        // down
        if (playerCords[0] < game.boardHeight - 1) {
            removeFigure('.g-bike');
            placeFigure('g-bike', 'player',playerCords[0] + 1, playerCords[1]);
        } else if (playerCords[0] >= game.boardHeight - 1) {

        }
    }
}

function moveObsticles() {
    let obsticles = document.querySelectorAll('.obsticle');

    obsticles.forEach(function (x) {
        let classList = x.classList[1];
        let parentCol = x.parentElement.dataset.col;
        let parentRow = x.parentElement.dataset.row;
        if(parentCol <= 1){
            findField(parentRow,parentCol).removeChild(x);
            game.points += 100;
        } else {
            findField(parentRow,parentCol).removeChild(x);
            placeFigure(classList, 'obsticle', parentRow, parentCol - 1)
        }
        

    });
}

function collisionDetection(){
    let obsticles = document.querySelectorAll('.obsticle');
    let player = document.querySelector('.player');
    let playerX = parentRow(player);
    let playerY = parentCol(player);
    obsticles.forEach((x)=>{
        let obsticleX = parentRow(x);
        let obsticleY = parentCol(x);
        if(playerX === obsticleX && playerY === obsticleY){
            game.lives--;
            findField(obsticleX,obsticleY).removeChild(x);
            alert(`COLLISION! 
LIVES: ${game.lives}
POINTS: ${game.points}`);
        }
    });
}

function parentCol(elementClass){
    return elementClass.parentElement.dataset.col;
};

function parentRow(elementClass){
    return elementClass.parentElement.dataset.row;
};