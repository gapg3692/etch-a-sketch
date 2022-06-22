const body = document.querySelector("body");
const gridContainer = document.createElement("div");
gridContainer.classList.add("gridContainer");
const Container = document.createElement("div");
Container.classList.add("container");
let color = "blue";
let boardColor = "white";
let gridNumber = 16;
let boardSize = 640;
let rainbow = false;
let eraser = false;

function createBoard(gridNumber, gridContainer) {
    const divGridTemp = document.querySelectorAll(".grid");
    divGridTemp.forEach((element) => gridContainer.removeChild(element));

    for (i = 1; i <= gridNumber ** 2; i++) {
        let div = document.createElement("div");
        div.classList.add("grid");
        gridContainer.appendChild(div);
    }

    gridContainer.style.gridTemplate = `repeat(${gridNumber}, auto) / repeat(${gridNumber}, auto)`;
}

function createGrid(gridNumber, boardSize, divGrid) {
    divGrid.forEach(
        (element) => (element.style.width = `${boardSize / gridNumber}px`)
    );
    divGrid.forEach(
        (element) => (element.style.height = `${boardSize / gridNumber}px`)
    );
}

createBoard(gridNumber, gridContainer);

Container.appendChild(gridContainer);
body.appendChild(Container);

let divGrid = Array.from(document.querySelectorAll(".grid"));

function addEvent() {
    divGrid = Array.from(document.querySelectorAll(".grid"));
    divGrid.forEach((element) =>
        element.addEventListener("mouseenter", colorizeDiv)
    );
}

function colorizeDiv(event) {
    if (eraser) color = boardColor;
    else if (rainbow) rainbowFunction();
    else color = "black";
    event.target.style.backgroundColor = `${color}`;
}

function clean() {
    divGrid = Array.from(document.querySelectorAll(".grid"));
    divGrid.forEach(
        (element) => (element.style.backgroundColor = `${boardColor}`)
    );
}

createGrid(gridNumber, boardSize, divGrid);
addEvent();

function buttonResize() {
    gridNumber = Number(prompt("Insert grid size"));
    if (gridNumber > 100) gridNumber = 100;
    else if (gridNumber < 1) gridNumber = 1;
    createBoard(gridNumber, gridContainer);
    addEvent();
    createGrid(gridNumber, boardSize, divGrid);
}

const button = document.getElementById("gridSize");
button.addEventListener("click", () => buttonResize());
const buttonRainbow = document.getElementById("rainbow");
buttonRainbow.addEventListener("click", () => {
    eraser = false;
    rainbow ? (rainbow = false) : (rainbow = true);
});
const buttonClean = document.getElementById("clean");
buttonClean.addEventListener("click", () => clean());

const buttonErase = document.getElementById("erase");
buttonErase.addEventListener("click", () => {
    rainbow = false;
    eraser ? (eraser = false) : (eraser = true);
});

function rainbowFunction() {
    color = `rgb(${Math.round(Math.random() * 256)},${Math.round(
		Math.random() * 256
	)},${Math.round(Math.random() * 256)})`;
}