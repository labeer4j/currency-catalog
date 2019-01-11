import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {LoadingBarHttpClientModule} from '@ngx-loading-bar/http-client';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {CurrencyService} from '../service/currency.service';
import {HttpClientModule} from '@angular/common/http';
import {PagerService} from '../service/pager.service';
import {CurrencyListComponent} from '../currency/list/currency-list.component';
import {CurrencyEditModule} from '../currency/edit/currency-edit.module';
import {FormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    CurrencyListComponent
  ],
  imports: [
    BrowserModule,
    LoadingBarHttpClientModule,
    AppRoutingModule,
    HttpClientModule,
    CurrencyEditModule,
    FormsModule
  ],
  providers: [CurrencyService, PagerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
