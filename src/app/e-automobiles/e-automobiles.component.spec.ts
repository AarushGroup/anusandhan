import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EAutomobilesComponent } from './e-automobiles.component';

describe('EAutomobilesComponent', () => {
  let component: EAutomobilesComponent;
  let fixture: ComponentFixture<EAutomobilesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EAutomobilesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EAutomobilesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
