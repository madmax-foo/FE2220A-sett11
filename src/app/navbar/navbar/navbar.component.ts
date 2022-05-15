import { Component, OnInit } from '@angular/core';
import { CarrelloComponent } from 'src/app/carrello/carrello.component';
import { CarrelloService } from 'src/app/services/carrello.service';
@Component({
  selector:'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
public totalItem : number = 0;


  constructor(private carrello: CarrelloService) { }

  ngOnInit(): void {
    this.carrello.getProducts().subscribe(res=>{
      this.totalItem = res.length;
    })
  }

}
