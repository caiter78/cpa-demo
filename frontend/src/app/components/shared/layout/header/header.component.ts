import { Component, Inject, OnInit } from "@angular/core";

@Component({
  selector: 'layout-header',
  templateUrl: 'header.component.html',
  styleUrls: ['header.component.scss']
})

export class HeaderComponent implements OnInit {


  constructor(@Inject('Window') public window: Window) {
  }

  ngOnInit() {

  }

}

