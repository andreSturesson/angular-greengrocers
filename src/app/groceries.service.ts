import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { firstValueFrom, BehaviorSubject } from 'rxjs';

export type Grocery = {
  id: string;
  name: string;
  price: number;
  type: string;
  quantity: number | 1;
};

@Injectable({
  providedIn: 'root',
})
export class GroceriesService {
  private BASE_URL = 'https://boolean-api-server.fly.dev/groceries';
  private grocerySubject = new BehaviorSubject<Grocery[]>([]);
  groceries$ = this.grocerySubject.asObservable();
  groceries: Grocery[] = [];

  private cartSubject = new BehaviorSubject<Grocery[]>([]);
  cart$ = this.cartSubject.asObservable();
  cart: Grocery[] = [];
  filteredGroceries: Grocery[] = [];

  constructor(private http: HttpClient) {
    this.getGroceries();
  }

  async getGroceries() {
    this.groceries = await firstValueFrom(
      this.http.get<Grocery[]>(this.BASE_URL)
    );
    this.grocerySubject.next(this.groceries);
  }

  get groceriesList() {
    return firstValueFrom(this.http.get<Grocery[]>(this.BASE_URL));
  }

  filterGroceriesByType(value: string) {
    if (value === 'All') {
      this.grocerySubject.next(this.groceries);
      return;
    }
    this.groceriesList.then((groceries: Grocery[]) => {
      this.filteredGroceries = groceries.filter((item: Grocery) =>
        item.type.toLowerCase().includes(value.toLowerCase())
      );
      this.grocerySubject.next(this.filteredGroceries);
    });
  }

  filterGroceriesByName(value: string) {
    this.groceriesList.then((groceries: Grocery[]) => {
      this.filteredGroceries = groceries.filter((item: Grocery) =>
        item.name.toLowerCase().includes(value.toLowerCase())
      );
      this.grocerySubject.next(this.filteredGroceries);
    });
  }

  sortGroceriesByPrice() {
    this.groceriesList.then((groceries: Grocery[]) => {
      this.filteredGroceries = groceries.sort(
        (a: Grocery, b: Grocery) => a.price - b.price
      );
      this.grocerySubject.next(this.filteredGroceries);
    });
  }

  sortGroceriesByName() {
    this.groceriesList.then((groceries: Grocery[]) => {
      this.filteredGroceries = groceries.sort((a: Grocery, b: Grocery) =>
        a.name.localeCompare(b.name)
      );
      this.grocerySubject.next(this.filteredGroceries);
    });
  }

  get total() {
    return this.cartSubject.getValue().reduce((acc, item) => {
      return acc + item.price * item.quantity;
    }, 0);
  }

  addToCart(grocery: Grocery) {
    let currentCart = this.cartSubject.getValue();
    const existingItem = currentCart.find((item) => item.id === grocery.id);
    if (existingItem) {
      existingItem.quantity += 1;
    } else {
      currentCart.push({ ...grocery, quantity: 1 });
    }
    this.cartSubject.next(currentCart);
  }

  removeFromCart(grocery: Grocery) {
    let currentCart = this.cartSubject.getValue();
    currentCart = currentCart.filter((item: Grocery) => item.id !== grocery.id);
    this.cartSubject.next(currentCart);
  }

  increaseQuantity(grocery: Grocery) {
    let currentCart = this.cartSubject.getValue();
    let item = currentCart.find((item) => item.id === grocery.id);
    if (item) {
      item.quantity += 1;
    }
    this.cartSubject.next(currentCart);
  }

  decreaseQuantity(grocery: Grocery) {
    let currentCart = this.cartSubject.getValue();
    let item = currentCart.find((item) => item.id === grocery.id);
    if (item) {
      item.quantity -= 1;
      if (item.quantity === 0) {
        this.removeFromCart(item);
      } else {
        this.cartSubject.next(currentCart);
      }
    }
  }
}
