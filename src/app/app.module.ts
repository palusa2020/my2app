import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { Ng2SearchPipeModule } from 'ng2-search-filter'; //importing the module


import { AppComponent } from './app.component';
import { NgxPaginationModule } from 'ngx-pagination';



@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule , FormsModule, NgxPaginationModule,Ng2SearchPipeModule //including into imports
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
