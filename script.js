let gridDiv = document.querySelector("#grid");

for(let i = 0; i < 16; i++){
    const div = document.createElement('div');
    div.classList.add("gridElement");
    console.log("added a div");
    gridDiv.appendChild(div);
}