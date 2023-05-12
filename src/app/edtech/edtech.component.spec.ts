import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EdtechComponent } from './edtech.component';

describe('EdtechComponent', () => {
  let component: EdtechComponent;
  let fixture: ComponentFixture<EdtechComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EdtechComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EdtechComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
