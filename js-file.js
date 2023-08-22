
const container = document.querySelector('.container')

let gridSize = 16;

// propmpt user for grid size 

function gridSizePrompt () {
    document.querySelector('.container').innerHTML = ""; 
    
    gridSize = Number(prompt("Enter a number under 100 to adjust the grid size", 16));
    
    makeGrid();
}
// create function that makes grid wuth user input while adjusting div height and width accordigly.

function makeGrid() {

let styleHeight = 36;
let styleWidth = 36;
let border = 0;

styleWidth = 576  / gridSize;
styleHeight = styleWidth;


    for (let i = 0; i < gridSize; i++) {
    let div = document.createElement('div');
    div.setAttribute('id', 'outerDivs');
    for (let j = 0; j < gridSize; j++) {
        let innerDiv = document.createElement('div')
        innerDiv.style.height = `${styleHeight}px`;
        innerDiv.style.width = `${styleWidth}px`; 
        innerDiv.setAttribute('id', 'innerDivs');
        div.appendChild(innerDiv);
    }
    container.appendChild(div);
}

let litBoxes = Array.from(document.querySelectorAll('#innerDivs'));
litBoxes.forEach(div => div.addEventListener('mouseover', hoverLight))
litBoxes.forEach(div => div.addEventListener('mouseout', hoverLightOff))
}
// two functions for the 'hover' effects 

function hoverLight (e) {
    e.target.classList.add('overLight');
}

function hoverLightOff (e) {
    e.target.classList.remove('overLight');
    
}

window.onload = gridSizePrompt();

let gridSizeButton = document.querySelector('button');
gridSizeButton.addEventListener('click', gridSizePrompt);


