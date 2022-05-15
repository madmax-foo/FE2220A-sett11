import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ProdottiService } from 'src/app/services/product.service';
import { Products } from 'src/app/interfaces/products';
import { Router } from '@angular/router';
import { CarrelloComponent } from 'src/app/carrello/carrello.component';
import { CarrelloService } from 'src/app/services/carrello.service';
import { DettagliComponent } from 'src/app/dettagli/dettagli.component';


@Component({
  selector: 'app-prodotti',
  templateUrl: './prodotti.component.html',
  styleUrls: ['./prodotti.component.scss']
})

export class ProdottiComponent implements OnInit {
telefoni:Products []  = [];
carrello:Products [] = [];
tel:Products [] = []
dettagli:Products[]=[];
  constructor(public prod: ProdottiService, private carrelloC : CarrelloService) { }

  ngOnInit(): void {
    this.prod.get().subscribe(
    (ProdoLoaded) => {
      this.telefoni = ProdoLoaded;
      console.log(this.telefoni);
      this.telefoni.forEach((a:Products)=>{
        Object.assign(a,{quantity:1,total:a.price});
      })
    },
    (err) => {
      alert(err);
    }
  );
}
aggiungialCarrello(tel:Products){
  this.carrelloC.addToCart(tel);

}

  }

