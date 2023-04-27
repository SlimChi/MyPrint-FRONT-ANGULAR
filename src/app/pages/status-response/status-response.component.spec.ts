import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StatusResponseComponent } from './status-response.component';

describe('StatusResponseComponent', () => {
  let component: StatusResponseComponent;
  let fixture: ComponentFixture<StatusResponseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StatusResponseComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StatusResponseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
