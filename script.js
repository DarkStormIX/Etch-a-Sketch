const container = document.querySelector(".container");

var size = 16
for(let i = 0; i< size * size; i++){
    const square = document.createElement("div");
    square.className = "square";
    container.appendChild(square);
}

