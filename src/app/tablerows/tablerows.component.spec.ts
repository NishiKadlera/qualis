import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TablerowsComponent } from './tablerows.component';

describe('TablerowsComponent', () => {
  let component: TablerowsComponent;
  let fixture: ComponentFixture<TablerowsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TablerowsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TablerowsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
