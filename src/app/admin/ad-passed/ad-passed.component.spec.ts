import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdPassedComponent } from './ad-passed.component';

describe('AdPassedComponent', () => {
  let component: AdPassedComponent;
  let fixture: ComponentFixture<AdPassedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdPassedComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdPassedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
