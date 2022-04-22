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
    var x, y;
    while (true) {
      x = Math.floor(Math.random() * (canvas.width / this.size));
      y = Math.floor(Math.random() * (canvas.width / this.size));
  
      if (x == head.x && y == head.y) {
        continue;
      }
      
      var bad = false;
      for (var i = 0; i < body.length; i++) {
        if (x == body[i].x && y == body[i].y) {
          bad = true;
          break;
        }
      }

      if (!bad) break;
    }
    this.pos.x = x;
    this.pos.y = y;
  }
}
