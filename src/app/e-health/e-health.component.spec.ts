import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EHealthComponent } from './e-health.component';

describe('EHealthComponent', () => {
  let component: EHealthComponent;
  let fixture: ComponentFixture<EHealthComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EHealthComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EHealthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
