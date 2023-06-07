const container = document.querySelector(".container");

function createGrid(size) {
  let amount = size * size;
	container.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
	container.style.gridTemplateRows = `repeat(${size}, 1fr)`;

  for (let i = 0; i < amount; i++) {
  	let divGrid = document.createElement("div");
		divGrid.classList.add("divgrid");
    container.insertAdjacentElement("beforeend", divGrid);
  }
}

createGrid(30);