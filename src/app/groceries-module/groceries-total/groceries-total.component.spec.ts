import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GroceriesTotalComponent } from './groceries-total.component';

describe('GroceriesTotalComponent', () => {
  let component: GroceriesTotalComponent;
  let fixture: ComponentFixture<GroceriesTotalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GroceriesTotalComponent]
    });
    fixture = TestBed.createComponent(GroceriesTotalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
