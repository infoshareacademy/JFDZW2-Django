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
        if (playerCords[0] <= 0) {
        } else if (playerCords[0] <= game.boardHeight - 1) {
            removeFigure('.g-bike');
            placeFigure('g-bike', (playerCords[0] - 1), playerCords[1]);
        }

    } else if (event.keyCode == '40') {
        // down
        if (playerCords[0] < game.boardHeight - 1) {
            removeFigure('.g-bike');
            placeFigure('g-bike', playerCords[0] + 1, playerCords[1]);
        } else if (playerCords[0] >= game.boardHeight - 1) {

        }
    }
}