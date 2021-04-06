import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TotalShowTypeComponent } from './total-show-type.component';

describe('TotalShowTypeComponent', () => {
  let component: TotalShowTypeComponent;
  let fixture: ComponentFixture<TotalShowTypeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TotalShowTypeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TotalShowTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
