import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeaClassComponent } from './tea-class.component';

describe('TeaClassComponent', () => {
  let component: TeaClassComponent;
  let fixture: ComponentFixture<TeaClassComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TeaClassComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TeaClassComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
