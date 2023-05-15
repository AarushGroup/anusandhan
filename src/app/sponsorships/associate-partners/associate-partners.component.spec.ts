import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssociatePartnersComponent } from './associate-partners.component';

describe('AssociatePartnersComponent', () => {
  let component: AssociatePartnersComponent;
  let fixture: ComponentFixture<AssociatePartnersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AssociatePartnersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AssociatePartnersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
