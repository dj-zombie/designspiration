import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { CarouselComponent } from './carousel/carousel.component';
import { SearchComponent } from './search/search.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CarouselComponent,
    SearchComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    SlickCarouselModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
