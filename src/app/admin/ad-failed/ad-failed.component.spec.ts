import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdFailedComponent } from './ad-failed.component';

describe('AdFailedComponent', () => {
  let component: AdFailedComponent;
  let fixture: ComponentFixture<AdFailedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdFailedComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdFailedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
