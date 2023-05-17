import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmergingTechnologiesComponent } from './emerging-technologies.component';

describe('EmergingTechnologiesComponent', () => {
  let component: EmergingTechnologiesComponent;
  let fixture: ComponentFixture<EmergingTechnologiesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmergingTechnologiesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmergingTechnologiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
