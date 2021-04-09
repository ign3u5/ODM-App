import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AverageDurationComponent } from './average-duration.component';

describe('AverageDurationComponent', () => {
  let component: AverageDurationComponent;
  let fixture: ComponentFixture<AverageDurationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AverageDurationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AverageDurationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
