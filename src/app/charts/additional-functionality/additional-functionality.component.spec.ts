import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdditionalFunctionalityComponent } from './additional-functionality.component';

describe('AdditionalFunctionalityComponent', () => {
  let component: AdditionalFunctionalityComponent;
  let fixture: ComponentFixture<AdditionalFunctionalityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdditionalFunctionalityComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdditionalFunctionalityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
