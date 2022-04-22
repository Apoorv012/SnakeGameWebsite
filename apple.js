class Apple {
  constructor(x, y, size) {
    this.pos = { x: x, y: y };
    this.size = size;
    this.color = "red";
  }

  draw() {
    createRect(
      this.pos.x * this.size + 2,
      this.pos.y * this.size + 2,
      this.size - 2,
      this.size - 2,
      this.color
    );
  }

  changePosition(head, body) {
    var x = Math.floor(Math.random() * (canvas.width / this.size));
    var y = Math.floor(Math.random() * (canvas.width / this.size));

    if (x == head.x && y == head.y) {
      this.changePosition(head, body);
      return;
    }

    Array.from(body).forEach((element) => {
      if (x == element.x && y == element.y) {
        this.changePosition(head, body);
        return;
      }
    });

    this.pos.x = x;
    this.pos.y = y;
  }
}
