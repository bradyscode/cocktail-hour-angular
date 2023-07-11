import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DrinkServiceService {

  constructor(private http: HttpClient) { }

  rootURL = 'https://www.thecocktaildb.com/api/json/v1/1';

  getRandomDrink() {
    return this.http.get(this.rootURL + '/random.php');
  }
}
