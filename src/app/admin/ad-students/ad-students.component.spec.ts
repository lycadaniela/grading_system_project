import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdStudentsComponent } from './ad-students.component';

describe('AdStudentsComponent', () => {
  let component: AdStudentsComponent;
  let fixture: ComponentFixture<AdStudentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdStudentsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdStudentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
