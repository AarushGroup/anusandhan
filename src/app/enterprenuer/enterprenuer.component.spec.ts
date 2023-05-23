import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnterprenuerComponent } from './enterprenuer.component';

describe('EnterprenuerComponent', () => {
  let component: EnterprenuerComponent;
  let fixture: ComponentFixture<EnterprenuerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EnterprenuerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EnterprenuerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
