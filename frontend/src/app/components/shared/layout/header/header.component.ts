import { ApplicationRef, Component, HostListener, Inject, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/primeng';
import { DOCUMENT } from "@angular/common";

@Component({
  selector: 'layout-header',
  templateUrl: 'header.component.html',
  styleUrls: ['header.component.scss']
})

export class HeaderComponent implements OnInit {

  public pageXOffset: number = 0;

  constructor(@Inject('Window') public window: Window,
              @Inject(DOCUMENT) private document: Document) {
  }

  @HostListener("window:scroll", [])
  onWindowScroll() {
    this.pageXOffset = window.pageYOffset || document.documentElement.scrollLeft || document.body.scrollLeft || 0

  }

  items: MenuItem[] = [
    {
      label: 'Home'
    },
    {
      label: 'Finance',
      icon: 'fa-line-chart'
    },
    {
      label: 'Reports',
      icon: 'fa-list-alt',
      items: [
        {label: 'Conversions'},
        {label: 'Postbacks'},
        {label: 'Aff networks'},
        {label: 'Buyers'},
        {label: 'Sources'}
      ]
    },
    {
      label: 'Catalog',
      icon: 'fa-bars',
      items: [
        {label: 'Conversions'},
        {label: 'Postbacks'},
        {label: 'Aff networks and status'},
        {label: 'Offers'},
        {label: 'Buyers and afid'},
        {label: 'Trackers and prefix'},
        {label: 'Sources'},
        {label: 'Currency and rate'}
      ]
    },
    {
      label: 'User',
      icon: 'fa-users'
    }
  ];

  ngOnInit() {

  }

}





