import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http'

import { AppComponent } from './app.component';
import { HttpComponent } from './components/http/http.component';

//Servicios
import { MutantesService } from "./services/mutantes.service"

@NgModule({
  declarations: [
    AppComponent,
    HttpComponent
  ],
  imports: [
    BrowserModule,
   HttpClientModule
  ],
  providers: [MutantesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
