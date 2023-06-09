import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LifeScienceComponent } from './life-science.component';

describe('LifeScienceComponent', () => {
  let component: LifeScienceComponent;
  let fixture: ComponentFixture<LifeScienceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LifeScienceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LifeScienceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
