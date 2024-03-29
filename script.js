let gridDiv = document.querySelector("#grid");
let gridSize = 16;

for(let i = 0; i < gridSize*gridSize; i++){
    const div = document.createElement('div');
    div.classList.add("gridElement");
    div.textContent = " ";
    console.log("added a div");
    gridDiv.appendChild(div);
}

function askGridSize(){

    let previousGridSize = gridSize; // Store the previous value of gridSize

    gridSize = prompt("What number x number should the grid be, up to 100?");
    while(true) {
        if(gridSize === null) {
            gridSize = previousGridSize; // Restore the previous value if prompt is canceled
            break; // Break out of the loop
        } else if(gridSize === "" || isNaN(gridSize) || gridSize < 1 || gridSize > 100) {
            gridSize = prompt("Please try again, under 100, What number x number should the grid be?");
        } else {
            break; // Break out of the loop if a valid input is received
        }
    }

    if(gridSize !== previousGridSize) {

        gridDiv.innerHTML = ""; //erase existing grid

        for(let i = 0; i < gridSize*gridSize; i++){
            const div = document.createElement('div');
            div.classList.add("gridElement");
            div.style.flexBasis = `${(100/gridSize)}%`;
            div.style.height = `${(100/gridSize)}vh`;
            console.log("added a new div");
            gridDiv.appendChild(div);
        }

    }

}

let opacityValue = 0.1;

gridDiv.addEventListener("mouseover", (event) => {
    let rn = Math.floor(Math.random() * 3) + 1;
    console.log(event.target.style.backgroundColor);
    if(event.target.style.backgroundColor === ''){
        
        event.target.style.opacity = opacityValue;

        switch(rn){
            case 1: event.target.style.backgroundColor = 'red';
            break;
            case 2: event.target.style.backgroundColor = 'green';
            break; 
            case 3: event.target.style.backgroundColor = 'blue';
            break;       
        }

        //make it darker for the next element, up to 10 elements
        if(opacityValue < 1){
            opacityValue += 0.1;
        }

    }
} );