import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StuClassComponent } from './stu-class.component';

describe('StuClassComponent', () => {
  let component: StuClassComponent;
  let fixture: ComponentFixture<StuClassComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StuClassComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StuClassComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
