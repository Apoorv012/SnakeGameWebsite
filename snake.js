class Snake {
  constructor(x, y, size) {
    this.head = { x: x, y: y };
    this.size = size;
    this.color = "blue";
    this.body = [{ x: x - 1, y: y }];
    this.direction = { x: 1, y: 0 };
    this.willGrow = false;
  }

  setDirection(x, y) {
    this.direction = { x: x, y: y };
  }

  draw() {
    createRect(
      this.head.x * this.size + 2,
      this.head.y * this.size + 2,
      this.size - 2,
      this.size - 2,
      this.color
    );
    Array.from(this.body).forEach((part) => {
      createRect(
        part.x * this.size + 2,
        part.y * this.size + 2,
        this.size - 2,
        this.size - 2,
        this.color
      );
    });
  }

  inDirection(x, y) {
    return this.direction.x == x && this.direction.y == y;
  }

  move(apple) {
    if (this.willGrow) {
      this.willGrow = false;
    } else {
      this.body.pop();
    }
    this.body.unshift({ x: this.head.x, y: this.head.y });

    this.head.x += this.direction.x;
    this.head.y += this.direction.y;

    // Check eaten?
    if (this.head.x == apple.pos.x && this.head.y == apple.pos.y) {
      this.willGrow = true;
      apple.changePosition(this.head, this.body);
    }

    this.checkSelfCollision();
    this.checkWall();
  }

  checkSelfCollision() {
    // Self-Collision
    Array.from(this.body).forEach((part) => {
      if (this.head.x == part.x && this.head.y == part.y) {
        gameOver();
      }
    });
  }

  checkWall() {
    if (this.head.x * this.size >= canvas.width) this.head.x = 0;
    if (this.head.y * this.size >= canvas.height) this.head.y = 0;

    if (this.head.x < 0) this.head.x = (canvas.width / this.size) - 1;
    if (this.head.y < 0) this.head.y = (canvas.height / this.size) - 1;
  }
}
