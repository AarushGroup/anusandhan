import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IncubationsInvestComponent } from './incubations-invest.component';

describe('IncubationsInvestComponent', () => {
  let component: IncubationsInvestComponent;
  let fixture: ComponentFixture<IncubationsInvestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IncubationsInvestComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IncubationsInvestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
