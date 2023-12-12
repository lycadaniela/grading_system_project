import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StuScreenComponent } from './stu-screen.component';

describe('StuScreenComponent', () => {
  let component: StuScreenComponent;
  let fixture: ComponentFixture<StuScreenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StuScreenComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StuScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
