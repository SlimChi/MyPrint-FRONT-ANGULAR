import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageCommandeComponent } from './manage-commande.component';

describe('ManageCommandeComponent', () => {
  let component: ManageCommandeComponent;
  let fixture: ComponentFixture<ManageCommandeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManageCommandeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ManageCommandeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
