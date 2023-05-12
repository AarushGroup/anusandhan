import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgritechComponent } from './agritech.component';

describe('AgritechComponent', () => {
  let component: AgritechComponent;
  let fixture: ComponentFixture<AgritechComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AgritechComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AgritechComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
