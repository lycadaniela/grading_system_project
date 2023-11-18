import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdSchoolyearComponent } from './ad-schoolyear.component';

describe('AdSchoolyearComponent', () => {
  let component: AdSchoolyearComponent;
  let fixture: ComponentFixture<AdSchoolyearComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdSchoolyearComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdSchoolyearComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
