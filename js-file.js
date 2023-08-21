
const container = document.querySelector('.container')
let gridSize = 16;

function gridSizePrompt () {
    let el = document.getElementById('button')
    gridSize = prompt("Enter a number under 100 to adjust the grid size", 16)

}

function makeGrid() {

for (let i = 0; i < gridSize; i++) {
    let div = document.createElement('div');
    div.setAttribute('id', 'outerDivs');
    for (let j = 0; j < gridSize; j++) {
        let innerDiv = document.createElement('div')
        innerDiv.setAttribute('id', 'innerDivs')
        div.appendChild(innerDiv);
    }
    container.appendChild(div);
}
}

function hoverLight (e) {
    e.target.classList.add('overLight');
}

function hoverLightOff (e) {
    e.target.classList.remove('overLight');
    
}

window.onload = gridSizePrompt();
makeGrid();

let litBoxes = Array.from(document.querySelectorAll('#innerDivs'));
//let litBoxes = document.getElementsById('innerDivs');
litBoxes.forEach(div => div.addEventListener('mouseover', hoverLight))
litBoxes.forEach(div => div.addEventListener('mouseout', hoverLightOff))