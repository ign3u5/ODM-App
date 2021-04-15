import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PopularCastComponent } from './popular-cast.component';

describe('PopularCastComponent', () => {
  let component: PopularCastComponent;
  let fixture: ComponentFixture<PopularCastComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PopularCastComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PopularCastComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
