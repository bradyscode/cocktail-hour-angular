import { Component } from '@angular/core';
import { DrinkServiceService } from '../drink-service.service';
import { HttpClient, HttpHandler } from '@angular/common/http';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {
  constructor(private ds: DrinkServiceService){}

  getDrink(){
    this.ds.getRandomDrink().subscribe(val => console.log(val));
  }
  
}
