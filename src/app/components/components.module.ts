import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from './card/card.component';
import { TableComponent } from './table/table.component';
import { ScreenComponent } from './screen/screen.component';
import { StuNavbarComponent } from './stu-navbar/stu-navbar.component';
import { StuScreenComponent } from './stu-screen/stu-screen.component';



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
