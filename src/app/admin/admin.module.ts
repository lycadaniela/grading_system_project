import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminRoutingModule } from './admin-routing.module';
import { NavbarComponent } from '../components/navbar/navbar.component';
import { ScreenComponent } from '../components/screen/screen.component';
import { AdminComponent } from './admin.component';
import { AdPassedComponent } from './ad-passed/ad-passed.component';
import { AdFailedComponent } from './ad-failed/ad-failed.component';



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
