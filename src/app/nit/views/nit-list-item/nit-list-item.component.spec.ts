import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NitListItemComponent } from './nit-list-item.component';

describe('NitListItemComponent', () => {
  let component: NitListItemComponent;
  let fixture: ComponentFixture<NitListItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NitListItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NitListItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
