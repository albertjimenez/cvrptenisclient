import {Injectable} from '@angular/core';
import {Children} from './children';


let childrenList: Children[] = new Array<Children>();

@Injectable()
export class StoreAndGenerateService {

  constructor() {
  }

  storeChildren(child: Children): boolean {


    if (childrenList.filter(c => c.id === child.id).length === 0) {
      childrenList.push(child);
      console.log('Childs stored:\n');
      childrenList.forEach(ch => console.log(ch.toString()));
      return true;
    }
    return false;
  }

  size(): number {
    return childrenList.length;
  }

}
