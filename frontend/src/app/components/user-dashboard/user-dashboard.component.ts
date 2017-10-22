import { Component, OnInit } from '@angular/core';
import { Postback } from '../../model/postback.model';
import { PostbackService } from "../../services/postback.service";
import { Pageable, PageReq } from "../../util/hateoas.util";
import { isUndefined } from "util";
import { LazyLoadEvent } from "primeng/primeng";

@Component({
  selector: 'app-user-dashboard',
  templateUrl: './user-dashboard.component.html',
  styleUrls: ['./user-dashboard.component.scss']
})
export class UserDashboardComponent implements OnInit {

  first: number = 0;

  dateFrom: Date;
  dateTo: Date;

  postbacks: Pageable<Postback>;
  filters: any[];


  constructor(public postbackService: PostbackService) {
  }

  ngOnInit() {
    this.findPostbacks(null);
  }

  findPostbacks(event: LazyLoadEvent) {
    console.log(event);

    let pageRequest: PageReq;
    let sortOrder = 'desc';
    let filters;

    if (event) {
      sortOrder = event.sortOrder > 0 ? 'asc' : 'desc';
      pageRequest = {
        page: event.first / event.rows,
        size: event.rows,
        sort: event.sortField + "," + sortOrder
      };
      filters = event.filters;
    } else {
      pageRequest = {
        page: 0,
        size: 20,
        sort: "date"  + "," + sortOrder
      }
    }

    this.postbackService.findBy(filters, pageRequest).subscribe(
      (data) => {
        console.log(data);
        this.postbacks = data;
      },
      (error) => {
        console.error(error)
      });

  }

  paginate(event) {
    console.log(event)
  }

}
