import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddedReleasedYearComponent } from './added-released-year.component';

describe('AddedReleasedYearComponent', () => {
  let component: AddedReleasedYearComponent;
  let fixture: ComponentFixture<AddedReleasedYearComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddedReleasedYearComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddedReleasedYearComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
