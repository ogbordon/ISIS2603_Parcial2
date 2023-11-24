import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';
import { Restaurante } from './restaurante';

@Injectable({
  providedIn: 'root'
})
export class RestauranteService {

private apiUrl: string = environment.baseUrl + 'international-restaurants.json';

// private apiUrl: string = 'https://gist.githubusercontent.com/t-montes/5ebece61782d6a06656b71a155ef0698/raw/2f50ca1a3d760da3535d2f374e84d7ea5193faa4/international-restaurants.json';

constructor(private http: HttpClient) { }

getRestaurantes(): Observable<Restaurante[]> {
  return this.http.get<Restaurante[]>(this.apiUrl);
}
}