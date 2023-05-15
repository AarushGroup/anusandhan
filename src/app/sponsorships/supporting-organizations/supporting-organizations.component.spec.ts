import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SupportingOrganizationsComponent } from './supporting-organizations.component';

describe('SupportingOrganizationsComponent', () => {
  let component: SupportingOrganizationsComponent;
  let fixture: ComponentFixture<SupportingOrganizationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SupportingOrganizationsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SupportingOrganizationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
