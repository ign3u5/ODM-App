import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MovieCountriesComponent } from './movie-countries.component';

describe('MovieCountriesComponent', () => {
  let component: MovieCountriesComponent;
  let fixture: ComponentFixture<MovieCountriesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MovieCountriesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MovieCountriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
