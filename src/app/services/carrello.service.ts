import { Injectable } from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';
import { AnyCatcher } from 'rxjs/internal/AnyCatcher';
import { Products } from '../interfaces/products';
import {ProdottiService} from '../services/product.service';


@Injectable({
  providedIn: 'root'
})
export class CarrelloService {
  public cartItemList: Products [] = []
  public listaProdotti = new BehaviorSubject<any>([]);
  public prodotto : Products []= [];

  constructor() { }

  getProducts(){
    return this.listaProdotti.asObservable();
  }

  setProduct(tel:any){
    this.cartItemList.push(...tel);
    this.listaProdotti.next(tel)

  }
  addToCart(tel:Products){
    this.cartItemList.push(tel);
    this.listaProdotti.next(this.cartItemList);
    this.getTotalPrice();
    console.log(this.cartItemList);

  }
  getTotalPrice() : number {
      let grandTotal = 0;
      this
          .cartItemList
          .map((a : Products) => {
              grandTotal += a.price;
          })
          return grandTotal;
  }

  removeAllCart() {
    this.cartItemList = []
    this.listaProdotti.next(this.cartItemList);



}}
