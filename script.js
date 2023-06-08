const slider = document.querySelector("#slide");
const container = document.querySelector(".container");
const colorBlackBtn = document.querySelector(".black");

function createGrid(size) {
  const container = document.querySelector(".container");
  const squares = container.querySelectorAll("div");
  squares.forEach(div => div.remove())
	container.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
	container.style.gridTemplateRows = `repeat(${size}, 1fr)`;
  
  let amount = size * size;
  for (let i = 0; i < amount; i++) {
  	let divGrid = document.createElement("div");
		divGrid.classList.add("divgrid");
    container.insertAdjacentElement("beforeend", divGrid);
  }
}

createGrid(16);

slider.addEventListener("input", function() {
  let slideVal = document.querySelector("#slide").value;
  createGrid(slideVal);
});

colorBlackBtn.addEventListener("click", () => {
  container.addEventListener("mouseover", (e) => {
    e.target.style.backgroundColor = "black";
  });
});
