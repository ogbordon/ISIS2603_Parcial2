import { Component, Input, OnInit } from '@angular/core';
import { Restaurante } from '../restaurante';

@Component({
  selector: 'app-restaurante-detail',
  templateUrl: './restaurante-detail.component.html',
  styleUrls: ['./restaurante-detail.component.css']
})
export class RestauranteDetailComponent implements OnInit {

  @Input() restauranteDetail!: Restaurante;

  constructor() { }

  ngOnInit() {
  }

}
