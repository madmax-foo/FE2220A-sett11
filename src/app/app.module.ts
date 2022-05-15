import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { Products } from './interfaces/products';
import { NavbarComponent } from './navbar/navbar/navbar.component';
import { ProdottiComponent } from './prodotti/prodotti/prodotti.component';
import { DettagliComponent } from './dettagli/dettagli.component';
import { Route} from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { CarrelloComponent } from './carrello/carrello.component';
import { AppRoutingModule } from './app-routing.module';




@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ProdottiComponent,
    DettagliComponent,
    CarrelloComponent,

  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
