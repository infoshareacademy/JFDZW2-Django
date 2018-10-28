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

function showLives() {
    const livesHolder = document.getElementById("g-lives");

    livesHolder.innerHTML = '';

    for (var i = 0; i < game.lives; i++) {
        const life = document.createElement("li");
        life.classList.add("g-life");
        livesHolder.appendChild(life);
    }
}

// szukanie pola do wstawienia figury
function findField(row, col) {
    let field = document.querySelector(`[data-row="${row}"][data-col="${col}"]`);

    return field;
}

function createFigure(animalName, objClass) {
    var figure = document.createElement("div");
    figure.classList.add("g-figure", animalName, objClass);

    return figure;
}

function placeFigure(figureName, objClass, row, col) {
    let field = findField(row, col);
    let figure = createFigure(figureName, objClass);
    field.appendChild(figure);
}

function removeFigure(className) {
    document.querySelector(className).remove();
}

function placePlayer() {
    let playerRow = Math.floor(game.boardHeight / 2);
    let playerCol = Math.floor(game.boardWidth / 7);
    placeFigure("g-bike", 'player', playerRow, playerCol);
}

function placeObsticle(randomClass) {
    let row = Math.floor(Math.random() * game.boardHeight);
    let col = game.boardWidth - 1;
    let field = findField(row, col);

    if (!field.hasChildNodes()) { // sprawdzanie czy juz nie ma jakiejś przeszkody w tym polu
        placeFigure(randomClass, 'obsticle', row, col);
    }
}

function placeAllObsticles(turn) {
    const obsticleArray = Object.values(game.obsticles); //pobieranie wartości ustawień przeszkód

    for (let fieldIndex = 0; fieldIndex <= Math.floor(game.boardHeight / 3); fieldIndex++) { // ilośc wygenerowanych przeszkód w danej turze
        obsticleArray.forEach(function (obsticle) {
            if (turn % obsticle.appearInterval === 0) { // sprawdzanie każdej przeszkody czy juz czas się pojawić
                const randomClass = obsticle.obsticleClass[Math.floor(Math.random() * obsticle.obsticleClass.length)] //losowanie klasy dla przeszkody

                placeObsticle(randomClass);
                fieldIndex++
            }
        })
    }
}

function backgrounMovementIllusion(target, classToSwap) {
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