import { Component } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-panier',
  templateUrl: './panier.component.html',
  styleUrls: ['./panier.component.css']
})
export class PanierComponent {
  cartItems: any[] = []; // array to hold the items in the cart
  total: number = 0; // variable to hold the total price of items in the cart
  constructor(private router: Router) {
    // Add the items defined in the items array to the cart
    for (const item of this.items) {
      this.cartItems.push({ ...item });
      this.total += (item.price ?? 0) * (item.quantity ?? 1); // Use nullish coalescing operator to provide default values
    }

  }

  // Define an array of items in the cart with optional properties
  items: { name?: string, price?: number, quantity?: number }[] = [
    { name: 'Rapport de stage', price: 10, quantity: 1 },
    { name: 'Item 1', price: 10, quantity: 1 },

  ];

  // function to decrement the quantity of an item in the cart
  decrementQuantity(item: any) {
    if (item.quantity > 1) {
      item.quantity--;
      this.total -= item.price;
    }
  }

  // function to increment the quantity of an item in the cart
  incrementQuantity(item: any) {
    item.quantity++;
    this.total += item.price;
  }

  // function to remove an item from the cart
  removeItem(item: any) {
    const index = this.cartItems.indexOf(item);
    if (index > -1) {
      this.total -= item.price * item.quantity;
      this.cartItems.splice(index, 1);
    }
  }

  // function to place the order
  placeOrder() {
    // code to place the order
    // reset the cartItems and total variables
    this.cartItems = [];
    this.total = 0;
  }

  async back() {
    await this.router.navigate(['user/home']);
  }
}
