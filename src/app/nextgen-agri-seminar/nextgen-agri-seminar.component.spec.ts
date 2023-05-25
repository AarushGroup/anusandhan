import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NextgenAgriSeminarComponent } from './nextgen-agri-seminar.component';

describe('NextgenAgriSeminarComponent', () => {
  let component: NextgenAgriSeminarComponent;
  let fixture: ComponentFixture<NextgenAgriSeminarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NextgenAgriSeminarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NextgenAgriSeminarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
