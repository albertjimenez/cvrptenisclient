export class Van {
  capacity: number;
  id: string;
  x: number;
  y: number;
  endX: number;
  endY: number;
  weight_INDEX = 0;


  constructor(capacity: number, id: string, x: number, y: number, endX: number, endY: number) {
    this.capacity = capacity;
    this.id = id;
    this.x = x;
    this.y = y;
    this.endX = endX;
    this.endY = endY;
  }
}
