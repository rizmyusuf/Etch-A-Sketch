const slider = document.querySelector("#slide");
const container = document.querySelector(".container");
const colorBlackBtn = document.querySelector(".black");
const rgbBtn = document.querySelector(".rgb");
const resetBtn = document.querySelector(".reset");


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

function RandomRGB() {
  let r = Math.floor(Math.random() * 256); // Random between 0-255
  let g = Math.floor(Math.random() * 256); // Random between 0-255
  let b = Math.floor(Math.random() * 256); // Random between 0-255
  return 'rgb(' + r + ',' + g + ',' + b + ')';
}

function reset() {
  const squares = container.querySelectorAll("div");
  squares.forEach(sqr => sqr.style.backgroundColor = "white");
}

createGrid(16);

slider.addEventListener("input", function() {
  let slideVal = document.querySelector("#slide").value;
  createGrid(slideVal);
  reset();
});

colorBlackBtn.addEventListener("click", () => {
  container.addEventListener("mouseover", (e) => {
    e.target.style.backgroundColor = "black";
  });
});

rgbBtn.addEventListener("click", (e) => {
  container.addEventListener("mouseover", (e) => {
    e.target.style.backgroundColor = RandomRGB();
  });
})

resetBtn.addEventListener("click", reset);
