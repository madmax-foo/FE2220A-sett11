import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, ROUTES, Routes } from '@angular/router';
import { DettagliComponent } from './dettagli/dettagli.component';
import { CarrelloComponent } from './carrello/carrello.component';
import { ProdottiComponent } from './prodotti/prodotti/prodotti.component';


const routes: Routes  = [
  {
    path:'', redirectTo: 'prodotti', pathMatch: 'full'
  },
      {
        path:'prodotti',
        component:ProdottiComponent
      },
      {
        path:'dettagli',
        component: DettagliComponent
      },
      {
        path:'carrello',
        component:CarrelloComponent
      },

      {
        path:'dettagli/:id',
        component:DettagliComponent
      }
    ]




@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule,
    CommonModule
  ]
})
export class AppRoutingModule { }
