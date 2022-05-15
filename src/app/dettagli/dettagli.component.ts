import { Component, OnInit } from '@angular/core';
import { ProdottiComponent } from '../prodotti/prodotti/prodotti.component';

import { ProdottiService } from '../services/product.service';
import { HttpClient } from '@angular/common/http';
import { Products } from '../interfaces/products';


@Component({
  templateUrl: './dettagli.component.html',
  styleUrls: ['./dettagli.component.scss']
})
export class DettagliComponent implements OnInit {
  baseUrl = 'http://localhost:4201'

  telefono : Products [] = []
  public prodotto : Products[] = []
  telefoni:Products []  = [];
  carrello:Products [] = [];
  tel:Products [] = []

  constructor(private prod: ProdottiService) {

  }

  ngOnInit(): void {
    this.prod.getProduct(1).subscribe



  }}




