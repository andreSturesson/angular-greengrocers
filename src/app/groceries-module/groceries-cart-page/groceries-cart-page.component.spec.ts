import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GroceriesCartPageComponent } from './groceries-cart-page.component';

describe('GroceriesCartPageComponent', () => {
  let component: GroceriesCartPageComponent;
  let fixture: ComponentFixture<GroceriesCartPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GroceriesCartPageComponent]
    });
    fixture = TestBed.createComponent(GroceriesCartPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
