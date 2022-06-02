import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MakePurchaseViewComponent } from './make-purchase-view.component';

describe('MakePurchaseViewComponent', () => {
  let component: MakePurchaseViewComponent;
  let fixture: ComponentFixture<MakePurchaseViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MakePurchaseViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MakePurchaseViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
