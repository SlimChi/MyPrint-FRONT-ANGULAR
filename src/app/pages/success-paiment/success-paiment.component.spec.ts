import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuccessPaimentComponent } from './success-paiment.component';

describe('SuccessPaimentComponent', () => {
  let component: SuccessPaimentComponent;
  let fixture: ComponentFixture<SuccessPaimentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SuccessPaimentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SuccessPaimentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
