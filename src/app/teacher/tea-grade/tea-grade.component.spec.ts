import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeaGradeComponent } from './tea-grade.component';

describe('TeaGradeComponent', () => {
  let component: TeaGradeComponent;
  let fixture: ComponentFixture<TeaGradeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TeaGradeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TeaGradeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
