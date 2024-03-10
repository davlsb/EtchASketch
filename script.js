let gridDiv = document.querySelector("#grid");

for(let i = 0; i < 256; i++){
    const div = document.createElement('div');
    div.classList.add("gridElement");
    div.textContent = " ";
    console.log("added a div");
    gridDiv.appendChild(div);
}