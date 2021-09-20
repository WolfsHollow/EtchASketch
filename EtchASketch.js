const container = document.querySelector('#gridContainer');
container.setAttribute('class', 'gridContainerClass');

let divBoxes = []

for (i = 0; i < 16; i++){
    divBoxes[i] = document.createElement('div');
    divBoxes[i].setAttribute('class', 'gridBox');
    container.appendChild(divBoxes[i]);
    divBoxes[i].addEventListener('mouseover', hoverChange, true)
}

function hoverChange(i){
    this.setAttribute('style', 'background-color: black;');
}
paperBtn.addEventListener('click', () => {result = Game('paper'); Scoring(score,result)});
scissorsBtn.addEventListener('click', () => {result = Game('scissors'); Scoring(score,result)});

