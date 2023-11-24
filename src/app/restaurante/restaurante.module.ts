import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common' 
import { RestauranteListComponent } from './restaurante-list/restaurante-list.component';

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [ RestauranteListComponent ],
  declarations: [ RestauranteListComponent ]
})
export class RestauranteModule { }
