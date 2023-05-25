import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RenewableEnergySeminarComponent } from './renewable-energy-seminar.component';

describe('RenewableEnergySeminarComponent', () => {
  let component: RenewableEnergySeminarComponent;
  let fixture: ComponentFixture<RenewableEnergySeminarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RenewableEnergySeminarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RenewableEnergySeminarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
