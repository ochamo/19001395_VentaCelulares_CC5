import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NitComponent } from './nit.component';

describe('NitComponent', () => {
  let component: NitComponent;
  let fixture: ComponentFixture<NitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NitComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
