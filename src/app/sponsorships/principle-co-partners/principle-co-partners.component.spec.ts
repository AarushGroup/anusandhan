import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrincipleCoPartnersComponent } from './principle-co-partners.component';

describe('PrincipleCoPartnersComponent', () => {
  let component: PrincipleCoPartnersComponent;
  let fixture: ComponentFixture<PrincipleCoPartnersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrincipleCoPartnersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PrincipleCoPartnersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
