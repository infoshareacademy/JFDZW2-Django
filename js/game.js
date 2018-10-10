//obiekt globalny z ustawieniami gry
const game = {
    lifes: 3,
    boardHeight:5,
    boardWidth: 20,
    defaultSpeed: 100, //szybkość odświerzania w ms
    fasterSpeed: 200,
    fastestSpeed: 300,
    obsticlePoints:100,
    pickupPoints:300
}

document.addEventListener("DOMContentLoaded", function(event) {
    console.log("DOM fully loaded and parsed");

    //Draw board
    drawBoard();

    //Draw pawns
    placeFigure("g-bike",2,4);
    placeFigure("g-obsticle",1,6);
    placeFigure("g-pickup",0,12);

    //Add movement
    document.onkeydown = keyPress;

    //setEventListeners();
    //Reset
    //setResetButton();
    //One party moves at time

    //Winning condition checking

});