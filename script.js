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
    gridSize = prompt("What number x number should the grid be?");
    gridDiv.innerHTML = ""; //erase existing grid

    for(let i = 0; i < gridSize*gridSize; i++){
        const div = document.createElement('div');
        div.classList.add("gridElement");
        div.textContent = "new div";
        div.style.flexBasis = `${(100/gridSize)}%`;
        div.style.height = `${(100/gridSize)}vh`;
        console.log("added a new div");
        gridDiv.appendChild(div);
    }

}

gridDiv.addEventListener("mouseover", (event) => {
    event.target.style.backgroundColor = '#000';
} );