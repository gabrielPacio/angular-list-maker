import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { ListHeaderComponent } from './list-header-component';
import { ListSectionComponent } from './list-section.component';


@NgModule({
  declarations: [
    AppComponent,
    ListHeaderComponent,
    ListSectionComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
