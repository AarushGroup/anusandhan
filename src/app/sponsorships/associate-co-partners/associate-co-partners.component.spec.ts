import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssociateCoPartnersComponent } from './associate-co-partners.component';

describe('AssociateCoPartnersComponent', () => {
  let component: AssociateCoPartnersComponent;
  let fixture: ComponentFixture<AssociateCoPartnersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AssociateCoPartnersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AssociateCoPartnersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
