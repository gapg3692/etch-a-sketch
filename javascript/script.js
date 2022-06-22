const body = document.querySelector("body");
const gridContainer = document.createElement("div");
gridContainer.classList.add("gridContainer");
const Container = document.createElement("div");
Container.classList.add("container");
let color = "red";
let boardColor = "black";

for (i = 1; i <= 256; i++) {
    let div = document.createElement("div");
    div.classList.add("grid");
    gridContainer.appendChild(div);
}

Container.appendChild(gridContainer);
body.appendChild(Container);

const divGrid = Array.from(document.querySelectorAll(".grid"));

divGrid.forEach((element) =>
    element.addEventListener("mouseenter", colorizeDiv)
);

function colorizeDiv(event) {
    event.target.style.cssText = `background-color: ${color};`;
}

function clean() {
    divGrid.forEach(
        (element) => (element.style.cssText = `background-color: ${boardColor};`)
    );
}