import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateNitDialogComponent } from './create-nit-dialog.component';

describe('CreateNitDialogComponent', () => {
  let component: CreateNitDialogComponent;
  let fixture: ComponentFixture<CreateNitDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateNitDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateNitDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
