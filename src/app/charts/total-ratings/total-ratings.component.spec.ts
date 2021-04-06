import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TotalRatingsComponent } from './total-ratings.component';

describe('TotalRatingsComponent', () => {
  let component: TotalRatingsComponent;
  let fixture: ComponentFixture<TotalRatingsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TotalRatingsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TotalRatingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
