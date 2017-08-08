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
    const apiResource = 'stub';
    return this.http.get(API_URL + apiResource)
      .map((response: Response) => response.json());
  }

  getSolution() {
    const apiResource = 'solve';
    const query: Query = new Query(vansList, childrenList);
    const headers = new Headers({'Content-Type': 'application/json'});
    // headers.append('Access-Control-Allow-Headers', 'Content-Type');
    // headers.append('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
    // headers.append('Access-Control-Allow-Origin', '*');
    const options = new RequestOptions({headers: headers});
    return this.http.post(API_URL + apiResource, JSON.stringify(query), options).map((res: Response) => res.text());
  }

  getAPIURL() {
    return API_URL;
  }
  // private extractData(res: Response) {
  //   const body = res.json();
  //   return body.data || {};
  // }
  // private handleErrorObservable (error: Response | any) {
  //   console.error(error.message || error);
  //   return Observable.throw(error.message || error);
  // }
  // private handleErrorPromise (error: Response | any) {
  //   console.error(error.message || error);
  //   return Promise.reject(error.message || error);
  // }


}
