// Our Shape "Constructor"
function Shape(x, y) {
    this.position = {x,y}
}

Shape.prototype.move = function(x,y) {
    this.position.x = this.position.x + x;
    this.position.y = this.position.y + y;
}

module.exports = Shape;