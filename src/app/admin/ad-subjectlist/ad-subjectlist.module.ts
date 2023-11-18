import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdSubjectlistComponent } from './ad-subjectlist.component';
import { AdSubjectsRoutingModule } from '../ad-subjects/ad-subjects-routing.module';
import { ComponentsModule } from 'src/app/components/components.module';
import { AdSubjectlistRoutingModule } from './ad-subjectlist-routing.module';


@NgModule({
  declarations: [AdSubjectlistComponent],
  imports: [
    CommonModule,
    AdSubjectlistRoutingModule,
    ComponentsModule
  ]
})
export class AdSubjectlistModule { }
