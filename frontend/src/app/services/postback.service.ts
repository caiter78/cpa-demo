import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Postback } from "../model/postback.model";
import { Pageable, PageReq} from "../util/hateoas.util";
import { HttpHelper } from "../util/http.helper";


@Injectable()
export class PostbackService {
  private baseUrl = 'api/postbacks';

  constructor(private http: HttpClient,
              private httpHelper: HttpHelper) {
  }

  get(id: any): Observable<Postback> {
    return this.http.get<Postback>(`${this.baseUrl}/${id}`);
  }

  getAll(pageRequest: PageReq): Observable<Pageable<Postback>> {

    let params = new HttpParams();
    params = this.httpHelper.pageRequestToParams(pageRequest, params);

    return this.http.get<Pageable<Postback>>(`${this.baseUrl}`,  { params: params });
  }

  findBy(filters, pageRequest: PageReq): Observable<Pageable<Postback>> {

    let params = new HttpParams();
    params = this.httpHelper.pageRequestToParams(pageRequest, params);
    params = this.httpHelper.filterToParams(filters, params);

    // return this.http.get<Pageable<Postback>>(`${this.baseUrl}`,  { params: params });
    return this.http.get<Pageable<Postback>>(`${this.baseUrl}/search/findBy`,  { params: params });
  }

}
