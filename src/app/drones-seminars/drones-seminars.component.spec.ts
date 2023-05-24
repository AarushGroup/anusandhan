import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DronesSeminarsComponent } from './drones-seminars.component';

describe('DronesSeminarsComponent', () => {
  let component: DronesSeminarsComponent;
  let fixture: ComponentFixture<DronesSeminarsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DronesSeminarsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DronesSeminarsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
