import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RequestsComponent } from './requests/requests.component';
import { NewRequestComponent } from './new-request/new-request.component';
import { RequestDetailComponent } from './request-detail/request-detail.component';
import { RequestByDestinationComponent } from './request-byDestination/request-byDestination';


@NgModule({
  declarations: [
    AppComponent,
    RequestsComponent,
    NewRequestComponent,
    RequestDetailComponent,
    RequestByDestinationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
