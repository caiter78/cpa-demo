import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';
import { Postback } from "../model/postback.model";
import { Pageable } from "../util/hateoas.util";


@Injectable()
export class PostbackService {
  private baseUrl = 'api/postbacks';

  constructor(private http: HttpClient) {
  }

  get(id: any): Observable<Postback> {
    return this.http.get<Postback>(`${this.baseUrl}/${id}`);
  }

  getAll(): Observable<Pageable<Postback>> {
    return this.http.get<Pageable<Postback>>(`${this.baseUrl}`);
  }

}
