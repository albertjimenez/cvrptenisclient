import {Injectable} from '@angular/core';
import {Children} from './children';
import {Van} from './van';
import {Headers, Http, RequestOptions, Response} from '@angular/http';
import {Observable} from 'rxjs';
import {Query} from './query';


const API_URL = 'https://cvrp-tenis.herokuapp.com/';

const childrenList: Children[] = [];
const vansList: Van[] = [];

@Injectable()
export class StoreAndGenerateService {

  constructor(private http: Http) {
  }

  storeChildren(child: Children): boolean {
    if (childrenList.filter(c => c.id === child.id).length === 0) {
      childrenList.push(child);
      return true;
    }
    return false;
  }

  getAllVans(): Van[] {
    return vansList;
  }

  getAllChildren(): Children[] {
    return childrenList;
  }
  storeVan(van: Van): boolean {
    if (vansList.filter(v => v.id === van.id).length === 0) {
      vansList.push(van);
      return true;
    }
    return false;
  }

  deleteChildrenById(ids: string) {
    const index = childrenList.findIndex(todo => todo.id === ids.trim());
    childrenList.splice(index, 1);
  }

  deleteVanById(ids: string) {
    const index = vansList.findIndex(todo => todo.id === ids.trim());
    vansList.splice(index, 1);
  }

  getAll(): Observable<any> {
    const apiResource = 'api/stub';
    return this.http.get(API_URL + apiResource)
      .map((response: Response) => response.json());
  }

  getSolution() {
    const apiResource = 'https://cvrp-tenis.herokuapp.com/api/solve';
    const query: Query = new Query(vansList, childrenList);
    const headers = new Headers({'Content-Type': 'application/json'});
    const options = new RequestOptions({headers: headers});
    return this.http.post(apiResource, JSON.stringify(query), options).map((res: Response) => res.text());
  }

  getAPIURL() {
    return API_URL;
  }

}
