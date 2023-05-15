import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrimePartnersComponent } from './prime-partners.component';

describe('PrimePartnersComponent', () => {
  let component: PrimePartnersComponent;
  let fixture: ComponentFixture<PrimePartnersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrimePartnersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PrimePartnersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
