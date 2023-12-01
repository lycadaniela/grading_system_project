import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdClassComponent } from './ad-class.component';

describe('AdClassComponent', () => {
  let component: AdClassComponent;
  let fixture: ComponentFixture<AdClassComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdClassComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdClassComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
