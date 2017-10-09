import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { IcoListService } from './services/ico-list.service';
import {
  FooterComponent,
  BannerComponent,
  MainComponent,
  ListItemComponent
} from './components';
import { HttpModule } from '@angular/http';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    BannerComponent,
    MainComponent,
    ListItemComponent
  ],
  imports: [
    BrowserModule,
    HttpModule
  ],
  providers: [
    IcoListService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
