class Shape {
  constructor(height, width, color) {
    this.color = color;
    this.height = height;
    this.width = width;
  }
  height = 0;
  width = 0;
  color = "";
}

const square = new Shape(10, 10, "Red");
console.log(square.width, square.height, square.color);

const rectangle = new Shape(10, 20, "Blue");
console.log(rectangle.width, rectangle.height, rectangle.color);
