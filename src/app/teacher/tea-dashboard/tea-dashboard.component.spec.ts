import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeaDashboardComponent } from './tea-dashboard.component';

describe('TeaDashboardComponent', () => {
  let component: TeaDashboardComponent;
  let fixture: ComponentFixture<TeaDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TeaDashboardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TeaDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
