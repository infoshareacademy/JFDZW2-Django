//obiekt globalny z ustawieniami gry
const game = {
    lifes: 3,
    boardHeight: 5,
    boardWidth: 20,
    defaultSpeed: 100, //szybkość odświerzania w ms
    fasterSpeed: 200,
    fastestSpeed: 300,
    obsticlePoints: 100,
    pickupPoints: 300,
    obsticleClass: {
        car: ['g-obsticle__car--tug','g-obsticle__car--police','g-obsticle__car--passenger','g-obsticle__car--family'],
        tree: ['g-obsticle__tree--maple','g-obsticle__tree--apple','g-obsticle__tree--pine','g-obsticle__tree--oak'],
        pickup: ['g-pickup--bottle','g-pickup--poison','g-pickup--mushroom','g-pickup--coin']
    }
}

document.addEventListener("DOMContentLoaded", function (event) {
    console.log("DOM fully loaded and parsed");

    //Draw board
    drawBoard();

    //Draw pawns
    placeFigure("g-bike", 2, 4);
    placeFigure(randomObsticle("car"), 1, 6);
    placeFigure(randomObsticle("car"), 3, 10);
    placeFigure(randomObsticle("pickup"), 0, 12);
    placeFigure(randomObsticle("pickup"), 2, 9);
    placeFigure(randomObsticle("tree"), 3, 7);
    placeFigure(randomObsticle("tree"), 1, 10);


    //Add movement
    document.onkeydown = keyPress;

    //setEventListeners();
    //Reset
    //setResetButton();
    //One party moves at time

    //Winning condition checking

});