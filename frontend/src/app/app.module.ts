import { BrowserModule } from '@angular/platform-browser';
import { ModuleWithProviders, NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { routing } from './app.routing';
import { CpaSharedModule } from './components/shared/cpa.shared.module';
import { HttpClient, HttpClientModule } from "@angular/common/http";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { HttpHelper } from "./util/http.helper";

const rootRouting: ModuleWithProviders = RouterModule.forRoot([], {useHash: false});

@NgModule({
  imports: [
    rootRouting,
    routing,
    BrowserModule.withServerTransition({appId: 'cpa-browser'}),
    BrowserAnimationsModule,
    CpaSharedModule,
    HttpClientModule
  ],
  declarations: [
    AppComponent,
  ],
  providers: [
    HttpClient,
    HttpHelper,
    { provide: 'Window', useValue: window }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
