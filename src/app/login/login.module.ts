import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginRoutingModule } from './login-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ComponentsModule } from 'src/app/components/components.module';
import { LoginComponent } from './login.component';




@NgModule({
  declarations: [LoginComponent
  ],
  imports: [
    CommonModule,
    LoginRoutingModule,
    ComponentsModule,
    FormsModule, 
    ReactiveFormsModule
    
  ]
})
export class LoginModule { }
