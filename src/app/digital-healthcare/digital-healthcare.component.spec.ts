import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DigitalHealthcareComponent } from './digital-healthcare.component';

describe('DigitalHealthcareComponent', () => {
  let component: DigitalHealthcareComponent;
  let fixture: ComponentFixture<DigitalHealthcareComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DigitalHealthcareComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DigitalHealthcareComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
