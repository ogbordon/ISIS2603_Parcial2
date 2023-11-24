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

constructor(private http: HttpClient) { }

getRestaurantes(): Observable<Restaurante[]> {
  return this.http.get<Restaurante[]>(this.apiUrl);
}
}