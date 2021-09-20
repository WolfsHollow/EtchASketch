const pageContainer = document.querySelector('#page');
const EASContainer = document.querySelector('#EAScontainer');
const gridContainer = document.querySelector('#gridContainer');
const buttonContainer = document.querySelector('#buttonContainer');

const clearButton = document.querySelector('#clear');
const rgbButton = document.querySelector('#RGB');
const colorButton = document.querySelector('#color');

titleDiv = document.createElement('div');
titleDiv.setAttribute('id', 'title');
pageContainer.insertBefore(titleDiv, EASContainer);

titleDiv.textContent = 'Etch-A-Sketch';

clearButton.addEventListener('click', resetGrid, false);

gridContainer.setAttribute('class', 'gridContainerClass');

let divBoxes = []

let boxNum = 169;
let boxInRow = Math.sqrt(boxNum);
let heightWidth = (100 / boxInRow) + '%';
document.documentElement.style.setProperty('--boxNum', heightWidth)


for (i = 0; i < boxNum; i++){
    divBoxes[i] = document.createElement('div');
    divBoxes[i].setAttribute('class', 'gridBox');
    gridContainer.appendChild(divBoxes[i]);
    divBoxes[i].addEventListener('mouseover', hoverChange, true)
}

function hoverChange(i){
    this.setAttribute('style', 'background-color: black;');
}

function resetGrid(){
    for (i = 0; i < boxNum; i++){
        divBoxes[i].setAttribute('style', 'background-color: white');
    }
}