export class Van {
  capacity: number;
  id: string;
  x: number;
  y: number;
  endX: number;
  endY: number;
  weight_INDEX = 0;


  constructor(capacity: number, id: string, x: number, y: number, endX: number = x, endY: number = y) {
    this.capacity = capacity;
    this.id = id;
    this.x = x;
    this.y = y;
    this.endX = endX;
    this.endY = endY;
  }

  toString() {
    return 'Capacity: ' + this.capacity + ' ID:' + this.id + ' X: ' + this.x
      + ' Y: ' + this.y + ' EndX: ' + this.endX + ' EndY: ' + this.endY;
  }
}
