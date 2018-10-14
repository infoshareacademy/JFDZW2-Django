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

function createFigure(figureName) {
    var figure = document.createElement("div");
    figure.className = "g-figure " + figureName;

    return figure;
}

function removeFigure(className) {
    document.querySelector(className).remove();
}


function findField(row, col) {
    let field = document.querySelector(`[data-row="${row}"][data-col="${col}"]`);

    return field;
}

function placeFigure(figureName, row, col) {
    let field = findField(row, col);
    let figure = createFigure(figureName);
    field.appendChild(figure);
}

function randomObsticle(param) {
    let obsticleArray = game.obsticleClass[param]
    let result = 'g-obsticle ' + obsticleArray[Math.floor(Math.random() * obsticleArray.length)];
    console.log(result);
    return result;
}