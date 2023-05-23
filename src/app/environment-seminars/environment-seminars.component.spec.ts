import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnvironmentSeminarsComponent } from './environment-seminars.component';

describe('EnvironmentSeminarsComponent', () => {
  let component: EnvironmentSeminarsComponent;
  let fixture: ComponentFixture<EnvironmentSeminarsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EnvironmentSeminarsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EnvironmentSeminarsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
