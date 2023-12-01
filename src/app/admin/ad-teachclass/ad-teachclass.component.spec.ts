import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdTeachclassComponent } from './ad-teachclass.component';

describe('AdTeachclassComponent', () => {
  let component: AdTeachclassComponent;
  let fixture: ComponentFixture<AdTeachclassComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdTeachclassComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdTeachclassComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
