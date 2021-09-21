//Initialize variables and set up DOM
const pageContainer = document.querySelector('#page');
const EASContainer = document.querySelector('#EAScontainer');

const gridContainer = document.querySelector('#gridContainer');
gridContainer.setAttribute('class', 'gridContainerClass');

const buttonContainer = document.querySelector('#buttonContainer');

const clearButton = document.querySelector('#clear');
const rgbButton = document.querySelector('#RGB');
const colorButton = document.querySelector('#color');
const eraserButton = document.querySelector('#eraser');
const clickButton = document.querySelector('#clickhover');


//title
titleDiv = document.createElement('div');
titleDiv.setAttribute('id', 'title');
pageContainer.insertBefore(titleDiv, EASContainer);

titleDiv.textContent = 'Etch-A-Sketch';

//setup variables for box numbers. css variable for height/width
let divBoxes = []

let boxInRow = 4;
let totalBoxes = boxInRow*boxInRow;
let heightWidth = (100 / boxInRow) + '%';
document.documentElement.style.setProperty('--boxNum', heightWidth)


//setup colors
let rgbBool = false;
let colorCount = 0; 
let chosenColor = document.getElementById('colorValue').value;
const colorArray = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];

//setup eraser
let eraserBool = false;
let eraserColor = '#ffffff';

//setup click/hover
let clickToggleButton = false;

clearButton.addEventListener('click', resetGrid);
rgbButton.addEventListener('click', setRGB);
rgbButton.addEventListener('click', toggleButton);
eraserButton.addEventListener('click', eraserClick);
eraserButton.addEventListener('click', toggleButton);
clickButton.addEventListener('click', clickToggle);
clickButton.addEventListener('click', toggleButton);


//setup slider
const sliderValues = [];
for (i = 0; i < 101; i++){
    sliderValues[i] = i;
}
let input = document.getElementById('slider');
let output = document.getElementById('sliderOutput');

input.oninput = function(){
    output.innerHTML = sliderValues[this.value];
    drawGrid(output.innerHTML);
};
input.oninput();

//function to 'draw' on hover
function hoverChangePen(){
    chosenColor = document.getElementById('colorValue').value;
    currentColor = chosenColor;    
    if (eraserBool){
        currentColor = eraserColor;
    }  
    else if (rgbBool) {
        currentColor = colorSelect();
        colorCount++;     
    }  
    this.setAttribute('style', `background-color: ${currentColor}`);
}

function clickChange(){
    chosenColor = document.getElementById('colorValue').value;
    currentColor = chosenColor;
    if (eraserBool){
        currentColor = eraserColor;
    }  
    else if (rgbBool) {
        currentColor = colorSelect();
        colorCount++;     
    }  
    this.setAttribute('style', `background-color: ${currentColor}`);
}

//function to reset grid back to white
function resetGrid(){
    allBoxes = document.getElementsByClassName('gridBox');
    for (i = 0; i < allBoxes.length; i++){
        allBoxes[i].setAttribute('style', 'background-color: white');
    }
}

function drawGrid(boxes){
    boxNum = boxes;
    heightWidth = (100 / boxes) + '%';
    document.documentElement.style.setProperty('--boxNum', heightWidth)

    allBoxes = document.querySelector('#gridContainer');
    removeAllChildNodes(allBoxes);
    

    for (i = 0; i < boxes*boxes; i++){        
        divBoxes[i] = document.createElement('div');
        divBoxes[i].setAttribute('class', 'gridBox');
        gridContainer.appendChild(divBoxes[i]);
        divBoxes[i].addEventListener('mouseover', hoverChangePen)
    }
}

//turn on/off RGB
function setRGB(){
    if (rgbBool){
        rgbBool = false;
    }
    else if (!rgbBool){
        rgbBool = true;
    }
    console.log(rgbBool);
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

//function for eraser
function eraserClick(){
    if (!eraserBool){eraserBool = true;}
    else if (eraserBool){eraserBool = false;}
    console.log(eraserBool);
}

//remove child nodes
function removeAllChildNodes(parent){
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}

//toggles button styles On/OFF 
function toggleButton(event){  
    let style = getComputedStyle(this);
    let color = style.backgroundColor;
    if (color == 'rgb(165, 231, 165)' || color == 'rgb(255, 255, 255)'){
        this.setAttribute('style', 'background-color: skyblue');
    } 
    else if (color == 'rgb(135, 206, 235)'){
        this.setAttribute('style', 'background-color: white');
    }
}

function clickToggle(){
    divBoxes = document.getElementsByClassName('gridBox');
    console.log(clickToggleButton);
    if (!clickToggleButton){
        clickToggleButton = true;  
        for (i = 0; i < divBoxes.length; i++){
            divBoxes[i].removeEventListener('mouseover', hoverChangePen);
            divBoxes[i].addEventListener('click', clickChange);
        }
    }
    else if (clickToggleButton){
        clickToggleButton = false;
        for (i = 0; i < divBoxes.length; i++){
            divBoxes[i].removeEventListener('click', clickChange);
            divBoxes[i].addEventListener('mouseover', hoverChangePen);
        }
    }
}