const body = document.querySelector("body");
const gridContainer = document.createElement("div");
gridContainer.classList.add("gridContainer");
const Container = document.createElement("div");
Container.classList.add("container");

for (i = 1; i <= 256; i++) {
    let div = document.createElement("div");
    div.classList.add("grid");
    gridContainer.appendChild(div);
}

Container.appendChild(gridContainer);
body.appendChild(Container);

const divGrid = document.querySelectorAll(".grid");

console.log(divGrid);