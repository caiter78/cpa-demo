import { Component, Inject } from '@angular/core';
import 'rxjs/add/operator/startWith';

@Component({
  selector: 'layout-footer',
  templateUrl: 'footer.component.html',
  styleUrls: ['footer.component.scss']
})


export class FooterComponent {

  constructor(@Inject('Window') public window: Window) {
  }

}
