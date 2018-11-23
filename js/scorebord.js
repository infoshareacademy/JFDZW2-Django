//local storage zapis 
function saveScore() {
	localStorage.setItem(
        userName = prompt("Your Name:", "Yohnyy Boy"), game.points, );
        return;
};


function showScore() {
	let modal = document.querySelector('.c-modal');
	modal.innerHTML = '';
	let insideModal = document.createElement('div');
	insideModal.classList.add('c-modal-content', 'c-score');
	insideModal.innerHTML = userName + ` Your score: ${game.points}`;

	return;
};

// odczyt
function ReadScores() {
	localStorage.getItem(game.points);
	return;
}


function scoreBord() {
	//let userName = document.createElement('div');

	//userName.innerHTML = name;
	let modal = document.querySelector('.c-modal');
	modal.innerHTML = '';

	let insideModal = document.createElement('div');
	insideModal.innerHTML = userName + ` Your score: ${game.points}`;
	return;
};