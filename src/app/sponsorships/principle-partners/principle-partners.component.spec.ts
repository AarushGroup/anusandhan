import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrinciplePartnersComponent } from './principle-partners.component';

describe('PrinciplePartnersComponent', () => {
  let component: PrinciplePartnersComponent;
  let fixture: ComponentFixture<PrinciplePartnersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrinciplePartnersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PrinciplePartnersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
