import { Component, OnInit } from '@angular/core';
import { Postback } from '../../model/postback.model';
import { PostbackService } from "../../services/postback.service";
import { Pageable } from "../../util/hateoas.util";

@Component({
  selector: 'app-user-dashboard',
  templateUrl: './user-dashboard.component.html',
  styleUrls: ['./user-dashboard.component.scss']
})
export class UserDashboardComponent implements OnInit {

  postbacks: Pageable<Postback>;


  constructor(postbackService: PostbackService) {

    postbackService.getAll().subscribe(
      (data) => {
        console.log(data);
        this.postbacks = data;
      },
      (error) => {
        console.error(error)
      });

  }

  ngOnInit() {




  }

}
