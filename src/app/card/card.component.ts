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
  private drinks: Drink[];
  private drink: Drink;
  async getDrink(){
    try{
      this.drinks = await this.ds.fetchDrinks();
      this.drink = this.drinks[0]
      console.log(this.drink);
    }catch (error) {
      console.error('Error fetching data:', error);
    }
  }
  
}
