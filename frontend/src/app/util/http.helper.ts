import { Injectable } from '@angular/core';
import { HttpParams } from "@angular/common/http";
import { PageReq } from "./hateoas.util";

@Injectable()
export class HttpHelper {

  public filterToParams (filters, params: HttpParams) : HttpParams {

    if (filters) {
      Object.keys(filters).map(function(key, index) {
        let filter = filters[key];
        params = params.append(key, filter.value)
      });
    }

    return params;

  }

  public pageRequestToParams (pageRequest: PageReq, params: HttpParams) : HttpParams{
    params = params
      .append('page', pageRequest.page.toString())
      .append('size', pageRequest.size.toString())
      .append('sort', pageRequest.sort.toString());
    return params;
  }

}
