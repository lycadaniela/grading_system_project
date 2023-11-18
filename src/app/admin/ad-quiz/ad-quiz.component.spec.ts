import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdQuizComponent } from './ad-quiz.component';

describe('AdQuizComponent', () => {
  let component: AdQuizComponent;
  let fixture: ComponentFixture<AdQuizComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdQuizComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdQuizComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
