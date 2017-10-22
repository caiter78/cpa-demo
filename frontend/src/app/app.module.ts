import { BrowserModule } from '@angular/platform-browser';
import { ModuleWithProviders, NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { routing } from './app.routing';
import { CpaSharedModule } from './components/shared/shared.module';
import { HttpClient, HttpClientModule } from "@angular/common/http";

const rootRouting: ModuleWithProviders = RouterModule.forRoot([], {useHash: false});

@NgModule({
  imports: [
    BrowserModule.withServerTransition({appId: 'cpa-browser'}),
    rootRouting,
    routing,
    CpaSharedModule,
    HttpClientModule
  ],
  declarations: [
    AppComponent,
  ],
  providers: [
    HttpClient,
    { provide: 'Window', useValue: window }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
