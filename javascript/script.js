const body = document.querySelector("body");
const container = document.createElement("div");
for (i = 1; i <= 256; i++) {
    let div = document.createElement("div");
    div.classList.add("grid");
    container.appendChild(div);
}

body.appendChild(container);

const divGrid = document.querySelectorAll(".grid");

console.log(divGrid);