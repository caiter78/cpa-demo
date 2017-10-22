import { Component, Inject, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/primeng';

@Component({
  selector: 'layout-header',
  templateUrl: 'header.component.html',
  styleUrls: ['header.component.scss']
})

export class HeaderComponent implements OnInit {


  constructor() {
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





