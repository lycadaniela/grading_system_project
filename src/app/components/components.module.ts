import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from './card/card.component';
import { TableComponent } from './table/table.component';
import { TeaNavbarComponent } from './tea-navbar/tea-navbar.component';
import { TeaScreenComponent } from './tea-screen/tea-screen.component';



@NgModule({
  declarations: [
  CardComponent,
  TableComponent,

  ],
  imports: [
    CommonModule
  ],

  exports: [
    CardComponent,
    TableComponent,

  ]
})
export class ComponentsModule { }
