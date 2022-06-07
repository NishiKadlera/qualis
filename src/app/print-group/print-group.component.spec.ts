import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrintGroupComponent } from './print-group.component';

describe('PrintGroupComponent', () => {
  let component: PrintGroupComponent;
  let fixture: ComponentFixture<PrintGroupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrintGroupComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PrintGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
