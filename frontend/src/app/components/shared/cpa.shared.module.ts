import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './layout/footer/footer.component';
import { HeaderComponent } from './layout/header/header.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import {
  ButtonModule, InputTextModule, MenubarModule, DataTableModule, SharedModule, CalendarModule, ToolbarModule,
  PaginatorModule
} from 'primeng/primeng';

@NgModule({
  imports: [
    CommonModule,
    FlexLayoutModule,
    MenubarModule,
    InputTextModule,
    ButtonModule,
    DataTableModule,
    SharedModule,
    CalendarModule,
    PaginatorModule
  ],
  declarations: [
    HeaderComponent,
    FooterComponent,
  ],
  exports: [
    CommonModule,
    HeaderComponent,
    FooterComponent,
    FlexLayoutModule,
    MenubarModule,
    InputTextModule,
    ButtonModule,
    DataTableModule,
    SharedModule,
    CalendarModule,
    PaginatorModule
  ],
  providers: [
  ]
})

export class CpaSharedModule { }




