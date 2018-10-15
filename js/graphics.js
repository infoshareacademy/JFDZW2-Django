//tworzenie pojedynczego pola z numerem kolumny i wiersza
function createField(rowNumber, colNumber) {
    let field = document.createElement("div");
    field.classList.add("g-field");
    field.dataset.row = rowNumber;
    field.dataset.col = colNumber;

    return field;
}
// tworzenie wiersza z dołączoną zadaną ilością pól
function creatRow(rowNumber) {
    let row = document.createElement("div");
    row.classList.add("g-row");

    for (var i = 0; i < game.boardWidth; i++) {
        let field = createField(rowNumber, i);
        row.appendChild(field);
    }
    return row;
}
//rysowanie całej planszy
function drawBoard() {
    var board = document.getElementById("game-holder");

    for (var i = 0; i < game.boardHeight; i++) {
        let row = creatRow(i);
        board.appendChild(row);
    }
}

function createFigure(animalName, objClass) {
    var figure = document.createElement("div");
    figure.classList.add("g-figure", animalName, objClass);

    return figure;
}

function removeFigure(className) {
    document.querySelector(className).remove();
}


function findField(row, col) {
    let field = document.querySelector(`[data-row="${row}"][data-col="${col}"]`);

    return field;
}

function placeFigure(figureName, objClass, row, col) {
    let field = findField(row, col);
    let figure = createFigure(figureName, objClass);
    field.appendChild(figure);
}

function randomObsticle(param) {
    let obsticleArray = game.obsticleClass[param]
    let result = obsticleArray[Math.floor(Math.random() * obsticleArray.length)];
    return result;
}

function backgrounMovementIllusion(target, classToSwap){
    let field = document.querySelectorAll(target);
        if (game.turn % 2 === 0) {
            field.forEach((x) => {
                x.classList.add(classToSwap);
            });
        } else {
            field.forEach((x) => {
                x.classList.remove(classToSwap);
            });
        }
}