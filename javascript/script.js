const body = document.querySelector("body");
const gridContainer = document.createElement("div");
gridContainer.classList.add("gridContainer");
const Container = document.createElement("div");
Container.classList.add("container");
let color = "red";
let boardColor = "black";
let gridNumber = 16;
let boardSize = 640;

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
    event.target.style.cssText = `background-color: ${color};`;
}

function clean() {
    divGrid.forEach(
        (element) => (element.style.cssText = `background-color: ${boardColor};`)
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