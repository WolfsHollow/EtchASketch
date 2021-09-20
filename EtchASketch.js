//Initialize variables and set up DOM
const pageContainer = document.querySelector('#page');
const EASContainer = document.querySelector('#EAScontainer');

const gridContainer = document.querySelector('#gridContainer');
gridContainer.setAttribute('class', 'gridContainerClass');

const buttonContainer = document.querySelector('#buttonContainer');

const clearButton = document.querySelector('#clear');
const rgbButton = document.querySelector('#RGB');
const colorButton = document.querySelector('#color');


//title
titleDiv = document.createElement('div');
titleDiv.setAttribute('id', 'title');
pageContainer.insertBefore(titleDiv, EASContainer);

titleDiv.textContent = 'Etch-A-Sketch';


//Add clear button
clearButton.addEventListener('click', resetGrid, false);
rgbButton.addEventListener('click', setRGB, false);

//setup variables for box numbers. css variable for height/width
let divBoxes = []

let boxNum = 16;
let boxInRow = Math.sqrt(boxNum);
let heightWidth = (100 / boxInRow) + '%';
document.documentElement.style.setProperty('--boxNum', heightWidth)


//setup colors
let rgbBool = false;
let colorCount = 0; 
let chosenColor = document.getElementById('colorValue').value;
const colorArray = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];

//create the grid
for (i = 0; i < boxNum; i++){
    divBoxes[i] = document.createElement('div');
    divBoxes[i].setAttribute('class', 'gridBox');
    gridContainer.appendChild(divBoxes[i]);
    divBoxes[i].addEventListener('mouseover', hoverChange, true)
}

//setup slider
const sliderValues = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];
let input = document.getElementById('slider');
let output = document.getElementById('sliderOutput');

input.oninput = function(){
    output.innerHTML = sliderValues[this.value];
    drawGrid(output.innerHTML);
};
input.oninput();


//function to 'draw' on hover
function hoverChange(){
    chosenColor = document.getElementById('colorValue').value;
    currentColor = chosenColor;
    if (rgbBool) {
        currentColor = colorSelect();
        colorCount++;     
    }    
    this.setAttribute('style', `background-color: ${currentColor}`);
}

//function to reset grid back to white
function resetGrid(){
    for (i = 0; i < boxNum; i++){
        divBoxes[i].setAttribute('style', 'background-color: white');
    }
}

function drawGrid(boxes){
    boxNum = boxes;
    heightWidth = (100 / boxes) + '%';
    document.documentElement.style.setProperty('--boxNum', heightWidth)
    
    for (i = 0; i < boxes*boxes; i++){        
        divBoxes[i] = document.createElement('div');
        divBoxes[i].setAttribute('class', 'gridBox');
        gridContainer.appendChild(divBoxes[i]);
        divBoxes[i].addEventListener('mouseover', hoverChange, true)
    }
}

function setRGB(){
    if (rgbBool){
        rgbBool = false;
        console.log(rgbBool);
    }
    else if (!rgbBool){
        rgbBool = true;
        console.log(rgbBool);
    }
}

//function for rgb
function colorSelect(){
    if (colorCount > 6){
        colorCount = 0;
    }
    return colorArray[colorCount];
}

//function for color picker
function setChosenColor(){
    chosenColor = document.getElementById('colorValue').value;
}