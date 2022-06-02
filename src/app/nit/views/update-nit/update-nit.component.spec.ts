import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateNitComponent } from './update-nit.component';

describe('UpdateNitComponent', () => {
  let component: UpdateNitComponent;
  let fixture: ComponentFixture<UpdateNitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateNitComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateNitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
