function saveScore() {
    let name = prompt("Your Name:", "Yohnyy Boy");
 
    const userName = name;
    let userPoints = game.points;
    
    let scoreBoard = JSON.parse(localStorage.getItem('results'));
    
    if (scoreBoard === null){
      localStorage.setItem('results', JSON.stringify([{userName, userPoints}]));
    }	else {
    	const currentScore = {
      	userName, 
        userPoints
      }
    	scoreBoard.push(currentScore);
      localStorage.setItem('results', JSON.stringify(scoreBoard));
    }
    
}
//local storage zapis 
/*
function saveScore() {
	let name = prompt("Your Name:", "Yohnyy Boy");
	const userName = name;
	let userPoints = game.points;
	localStorage.getItem('results')
	localStorage.setItem("results", JSON.stringify([{userName, userPoints}]));
};
	*/

function showScore() {
	
	let modal = document.querySelector('c-modal');
	modal.innerHTML = '';
	let insideModal = document.createElement('div');
	insideModal.classList.add('c-modal-content' , 'c-score');
	
	insideModal.innerText ='Congratulations !!! '+ userName +` You have: ${game.points} points`;
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