import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminRoutingModule } from './admin-routing.module';
import { NavbarComponent } from '../components/navbar/navbar.component';
import { ScreenComponent } from '../components/screen/screen.component';
import { AdminComponent } from './admin.component';
import { AdTeachclassComponent } from './ad-teachclass/ad-teachclass.component';


@NgModule({
  declarations: [
    NavbarComponent,
    ScreenComponent,
    AdminComponent,
    
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    
  ]
})
export class AdminModule { }
