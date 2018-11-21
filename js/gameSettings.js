//obiekt globalny z ustawieniami gry
let game = {
    board: document.getElementById("game-holder"),
    obsticlesArr: document.querySelectorAll('.obsticle'),
    boardHeight: 7,
    boardWidth: 20, // optymalnie 4 x boardHeight
    defaultSpeed: 200, //szybkość odświerzania w ms
    fasterSpeed: 150,
    fastestSpeed: 100,
    levelHard: 1000,
    obsticlePoints: 10,
    pickupPoints: 300,
    gameInterval: undefined,
    obsticles: {
        tree: {
            obsticleClass: ['g-obsticle__tree--maple', 'g-obsticle__tree--apple', 'g-obsticle__tree--pine', 'g-obsticle__tree--oak'],
            appearInterval: 3
        },
        pickupGood: {
            obsticleClass: ['g-pickup--mushroom', 'g-pickup--coin'],
            appearInterval: 11
        },
        pickupBad: {
            obsticleClass: ['g-pickup--poison', 'g-pickup--bottle'],
            appearInterval: 5
        }
        //pickupLife
    },
    drunkState: [false, undefined],
    turn: 0,
    points: 0,
    lives: 3
}

const initialSettings = {
    ...game
}