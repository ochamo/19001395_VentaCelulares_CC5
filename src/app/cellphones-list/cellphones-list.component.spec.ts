import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CellphonesListComponent } from './cellphones-list.component';

describe('CellphonesListComponent', () => {
  let component: CellphonesListComponent;
  let fixture: ComponentFixture<CellphonesListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CellphonesListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CellphonesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
