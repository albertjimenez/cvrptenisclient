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
      return true;
    }
    return false;
  }

  size(): number {
    return childrenList.length;
  }

  getChildren() {
    return childrenList;
  }

  setChildren(childrenList2: Array<Children>) {
    childrenList = childrenList2;
  }

  deleteChildrenById(ids: string) {
    const index = childrenList.findIndex(todo => todo.id === ids.trim());
    childrenList.splice(index, 1);
  }

}
