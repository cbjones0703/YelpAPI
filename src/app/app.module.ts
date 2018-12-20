import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { YelpSearchComponent } from './yelp-search/yelp-search.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { DatabaseService } from './service/database.service';


@NgModule({
  declarations: [
    AppComponent,
    YelpSearchComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [HttpClient, DatabaseService],
  bootstrap: [AppComponent]
})
export class AppModule { }
