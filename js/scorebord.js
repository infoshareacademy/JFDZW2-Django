function saveScore(divName, callback) {
		const inputTemplate = `
		<div id="js-scoreIpnut" class="c-input o-flex">
      <input id="js-input" placeholder="Enter your name" class="c-input__input c-input__item o-flex__item" type="Yout timer name">
      <div id="js-addBtn" class="c-input__item c-input__button o-flex__item">Add</div>
		</div>
		<div id="js-score"></div>
		`
		divName.insertAdjacentHTML('beforeend', inputTemplate);
		callback();
}


function showScore() {
	
};
/*
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
*/
function setItem(key, value){
	localStorage.setItem(key, JSON.stringify(value));
}

function getItem(key){
	return JSON.parse(localStorage.getItem(key));
}