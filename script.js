const container = document.querySelector(".container");

function makeGrid(rows, cols) {
	let totalDiv = rows * cols;
  for (let i = 0; i < totalDiv; i++) {
  	const divGrid = document.createElement("div");
		divGrid.classList.add("divgrid");
    container.appendChild(divGrid);
  }
}

makeGrid(16,16);