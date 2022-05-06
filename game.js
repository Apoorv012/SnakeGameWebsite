const canvas = document.getElementById("canvas");
const canvasContext = canvas.getContext("2d");

var snake = new Snake(5, 5, 25);
var apple = new Apple(7, 7, 25)

var gameLoopID;

window.onload = () => {
  tick();
  gameLoop();
};

function gameLoop() {
  gameLoopID = setInterval(tick, 1000 / 15);
}

function tick() {
  update();
  draw();
}

function update() {
  snake.move(apple);
}

function gameOver() {
  clearInterval(gameLoopID);
}

function draw() {
  createRect(0, 0, canvas.width, canvas.height, "limegreen");
  apple.draw();
  snake.draw();
}

function createRect(x, y, width, height, color) {
  canvasContext.fillStyle = color;
  canvasContext.fillRect(x, y, width, height);
}

window.addEventListener("keydown", (event) => {
  setTimeout(() => {
    switch (event.code) {
      case "Down":
      case "ArrowDown":
        if (!snake.inDirection(0, -1)) snake.setDirection(0, 1);
        break;
      case "Up":
      case "ArrowUp":
        if (!snake.inDirection(0, 1)) snake.setDirection(0, -1);
        break;
      case "Left":
      case "ArrowLeft":
        if (!snake.inDirection(1, 0)) snake.setDirection(-1, 0);
        break;
      case "Right":
      case "ArrowRight":
        if (!snake.inDirection(-1, 0)) snake.setDirection(1, 0);
        break;
      // case "Space":                  <- Debug Purpose
      //   snake.willGrow = true;
      //   break;
      default:
        return;
    }
  }, 1);
});
