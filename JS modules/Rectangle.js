const Shape = require('./Shape');

function Rectangle(x, y, height, width) {
    Shape.call(this,x,y);
    this.height = height;
    this.width = width;
}

Rectangle.prototype = Object.create(Shape.prototype);
const rect = new Rectangle(0,0,7,9);
console.log(rect.position.x);
console.log(rect.height);
