import {Injectable} from '@angular/core';
import {Children} from './children';
import {Van} from './van';
import {Headers, Http, RequestOptions, Response} from '@angular/http';
import {Observable} from 'rxjs';
import {Query} from './query';


const API_URL = 'http://localhost:8080/api/solve';

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
    return this.http.get('http://localhost:8080/api/stub')
      .map((response: Response) => response.json());
  }

  getSolution(imageSrc: string) {
    const query: Query = new Query(vansList, childrenList);
    const headers = new Headers({'Content-Type': 'application/json'});
    const options = new RequestOptions({headers: headers});
    return this.http.post(API_URL, JSON.stringify(query), options).map((res: Response) => res.text());
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
