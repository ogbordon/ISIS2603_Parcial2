import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common' 
import { RestauranteListComponent } from './restaurante-list/restaurante-list.component';
import { RestauranteDetailComponent } from './restaurante-detail/restaurante-detail.component';

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [ RestauranteListComponent ],
  declarations: [ RestauranteListComponent, RestauranteDetailComponent]
})
export class RestauranteModule { }
