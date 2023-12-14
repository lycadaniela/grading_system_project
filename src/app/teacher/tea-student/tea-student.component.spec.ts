import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeaStudentComponent } from './tea-student.component';

describe('TeaStudentComponent', () => {
  let component: TeaStudentComponent;
  let fixture: ComponentFixture<TeaStudentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TeaStudentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TeaStudentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
