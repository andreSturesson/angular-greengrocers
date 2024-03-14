import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GroceriesFilterComponent } from './groceries-filter.component';

describe('GroceriesFilterComponent', () => {
  let component: GroceriesFilterComponent;
  let fixture: ComponentFixture<GroceriesFilterComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GroceriesFilterComponent]
    });
    fixture = TestBed.createComponent(GroceriesFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
