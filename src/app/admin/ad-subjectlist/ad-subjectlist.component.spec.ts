import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdSubjectlistComponent } from './ad-subjectlist.component';

describe('AdSubjectlistComponent', () => {
  let component: AdSubjectlistComponent;
  let fixture: ComponentFixture<AdSubjectlistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdSubjectlistComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdSubjectlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
