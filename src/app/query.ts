import {Van} from './van';
import {Children} from './children';

export class Query {
  vans: Van[];
  children: Children[];

  constructor(v: Van[], c: Children[]) {
    this.vans = v;
    this.children = c;
  }
}
