import { Component } from '@angular/core';
import { DrinkServiceService } from '../drink-service.service';
import { HttpClient, HttpHandler } from '@angular/common/http';
import { Drink } from '../cocktail.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {
  constructor(private ds: DrinkServiceService){}
  private drink: Drink;
  getDrink(){
    this.ds.getRandomDrink().subscribe(res => {
      this.drink = res;
      console.log(this.drink);
    })
  }
  
}
