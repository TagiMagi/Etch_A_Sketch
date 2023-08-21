
const container = document.querySelector('.container')

function makeGrid() {
for (let i = 0; i < 16; i++) {
    let div = document.createElement('div');
    div.setAttribute('id', 'outerDivs');
    for (let j = 0; j < 16; j++) {
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


makeGrid();

let litBoxes = Array.from(document.querySelectorAll('#innerDivs'));
//let litBoxes = document.getElementsById('innerDivs');
litBoxes.forEach(div => div.addEventListener('mouseover', hoverLight))
litBoxes.forEach(div => div.addEventListener('mouseout', hoverLightOff))