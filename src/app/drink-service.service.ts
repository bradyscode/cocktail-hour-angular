import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError, map, throwError } from 'rxjs';
import { Drink } from './cocktail.service';

@Injectable({
  providedIn: 'root'
})
export class DrinkServiceService {

  constructor(private http: HttpClient) { }
  rootURL = 'https://www.thecocktaildb.com/api/json/v1/1';

   getRandomDrink(): Observable<Drink> {
    return this.http.get<any>(`${this.rootURL}/random.php`).pipe(
      map(drink => {
        return drink;
      }),
      catchError(error => throwError(error))
    );
  }
}

