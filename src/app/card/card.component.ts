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
  constructor(private ds: DrinkServiceService){
    this.getDrink()
  }
  private drinks: Drink[];
  drink: Drink;
  async getDrink(){
    try{
      this.drinks = await this.ds.fetchDrinks();
      this.drink = this.drinks[0]
    }catch (error) {
      console.error('Error fetching data:', error);
    }
  }


  //return ingredients and measurments
  get filteredIngredients(): { measure: string, value: string }[] {
    const ingredients: { measure: string, value: string }[] = [];

    for (let i = 1; i <= 15; i++) {
      const ingredientKey = `strIngredient${i}`;
      const measureKey = `strMeasure${i}`;

      const ingredient = this.drink[ingredientKey];
      const measure = this.drink[measureKey];

      if (ingredient && ingredient.trim() !== '') {
        ingredients.push({ measure: measure || '', value: ingredient });
      }
    }

    return ingredients;
  }
  
}
