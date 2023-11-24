import { Component, OnInit } from '@angular/core';
import { Restaurante } from '../restaurante';
import { RestauranteService } from '../restaurante.service';

@Component({
  selector: 'app-restaurante-list',
  templateUrl: './restaurante-list.component.html',
  styleUrls: ['./restaurante-list.component.css']
})
export class RestauranteListComponent implements OnInit {


  selectedRestaurante!: Restaurante;
  selected = false; 
  restaurantes: Array<Restaurante> = [];

  constructor(private restauranteService: RestauranteService) { }

  onSelected(restaurante: Restaurante): void {
    this.selected = true;
    this.selectedRestaurante = restaurante;
  }

  getRestaurantes(): void {
    this.restauranteService.getRestaurantes().subscribe((restaurantes) => {
      this.restaurantes = restaurantes;
    });
  }

  ngOnInit() {
    this.getRestaurantes(); 
  }

}
