import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeaNavbarComponent } from './tea-navbar.component';

describe('TeaNavbarComponent', () => {
  let component: TeaNavbarComponent;
  let fixture: ComponentFixture<TeaNavbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TeaNavbarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TeaNavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
