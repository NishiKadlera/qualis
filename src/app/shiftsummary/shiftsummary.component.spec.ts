import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShiftsummaryComponent } from './shiftsummary.component';

describe('ShiftsummaryComponent', () => {
  let component: ShiftsummaryComponent;
  let fixture: ComponentFixture<ShiftsummaryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShiftsummaryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShiftsummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
