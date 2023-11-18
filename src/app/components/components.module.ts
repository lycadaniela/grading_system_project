import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from './card/card.component';
import { TableComponent } from './table/table.component';
import { CircleComponent } from './circle/circle.component';



@NgModule({
  declarations: [
  CardComponent,
  TableComponent,
  CircleComponent

  ],
  imports: [
    CommonModule
  ],

  exports: [
    CardComponent,
    TableComponent,
    CircleComponent

  ]
})
export class ComponentsModule { }
