import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeaScreenComponent } from './tea-screen.component';

describe('TeaScreenComponent', () => {
  let component: TeaScreenComponent;
  let fixture: ComponentFixture<TeaScreenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TeaScreenComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TeaScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
