import {Component, Injectable, OnInit} from '@angular/core';
import { Products } from '../interfaces/products';
import { CarrelloService } from '../services/carrello.service';

@Injectable({
  providedIn: 'root'
})

@Component(
    {templateUrl: './carrello.component.html', styleUrls: ['./carrello.component.scss']}
)
export class CarrelloComponent implements OnInit {

    public grandTotal : number = 0;
   public prodotto : Products[] = []
   constructor(private carrello : CarrelloService){  }




    ngOnInit(): void {
      this.carrello.getProducts()
      .subscribe(res=>{
        this.prodotto = res;
        this.grandTotal = this.carrello.getTotalPrice();
      })
    }
      emptycart(){
        this.carrello.removeAllCart();


    }}




