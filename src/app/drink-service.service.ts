import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError, map, throwError } from 'rxjs';
import { Drink, DrinksResponse } from './cocktail.service';
import axios from 'axios';

@Injectable({
  providedIn: 'root'
})
export class DrinkServiceService {

  constructor(private http: HttpClient) { }
  rootURL = 'https://www.thecocktaildb.com/api/json/v1/1';
  
  async fetchDrinks(): Promise<Drink[]> {
    try {
      const response = await axios.get<DrinksResponse>(`${this.rootURL}/random.php`);
      return response.data.drinks;
    } catch (error) {
      console.error('Error fetching drinks:', error);
      return [];
    }
  }
}

