export class Children {
  cost: number;
  id: string;
  x: number;
  y: number;
  weight_INDEX = 0;


  constructor(id: string, x: number, y: number, cost: number = 1) {
    this.cost = cost;
    this.id = id;
    this.x = x;
    this.y = y;
  }

  public toString() {
    return 'ID: ' + this.id + ' X: ' + this.x + ' Y: ' + this.y + ' Cost: ' + this.cost
  };
}
