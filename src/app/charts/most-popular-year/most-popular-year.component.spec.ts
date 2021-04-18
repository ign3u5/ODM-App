import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MostPopularYearComponent } from './most-popular-year.component';

describe('MostPopularYearComponent', () => {
  let component: MostPopularYearComponent;
  let fixture: ComponentFixture<MostPopularYearComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MostPopularYearComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MostPopularYearComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
