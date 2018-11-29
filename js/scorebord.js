function saveScore(divName) {
	const inputTemplate = `
		<div id="js-scoreIpnut" class="c-input o-flex">
      <input id="js-input" placeholder="Enter your name" class="c-input__input c-input__item o-flex__item" type="Yout timer name">
      <div id="js-addBtn" class="c-input__item c-input__button o-flex__item">Add</div>
		</div>
		<div id="js-score" class="c-score"></div>
		`
	divName.insertAdjacentHTML('beforeend', inputTemplate);

}


function showScore() {
	const addScore = document.querySelector('#js-addBtn');
	addScore.addEventListener('click', () => {

		const inputValue = document.querySelector('#js-input');
		const scoreTable = document.querySelector('#js-score');

		const playerName = inputValue.value;

		if (playerName) {
			const getScore = getItem('results') || [];
			getScore.push({
				userName: playerName,
				userPoints: game.points
			});
			const scoreSort = getScore.sort((a, b) => {
				return b.userPoints - a.userPoints;
			});

			if (scoreSort.length > 10) {
				scoreSort.pop();
			}
			scoreSort.forEach((elem, i) => {
				const template = `
                        <h3 class="center">${i+1}.   ${elem.userName} - ${elem.userPoints}</h3>
                        `
				scoreTable.insertAdjacentHTML('beforeend', template);
			});

			setItem('results', scoreSort);

			removeElem('#js-scoreIpnut');
		}
	})
};

function setItem(key, value) {
	localStorage.setItem(key, JSON.stringify(value));
}

function getItem(key) {
	return JSON.parse(localStorage.getItem(key));
}

function removeElem(elemId) {
	var elem = document.querySelector(elemId);
	elem.parentNode.removeChild(elem);
}