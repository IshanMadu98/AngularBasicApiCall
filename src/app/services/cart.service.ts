import { Injectable } from '@angular/core';
import { Product } from '../models/product.module';
import { CartItem } from '../models/cart-item.module';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  private cartItems: CartItem[] = [];

  getCartItems(): CartItem[] {
    return this.cartItems;
  }

  addToCart(product: Product): void {
    const existingItem = this.cartItems.find((item) => item.productId === product.id);

    if (existingItem) {
      existingItem.quantity++;
    } else {
      this.cartItems.push({
        productId: product.id,
        name: product.title,
        price: product.price,
        quantity: 1,
      });
    }
  }

  removeFromCart(productId: number): void {
    this.cartItems = this.cartItems.filter((item) => item.productId !== productId);
  }

  clearCart(): void {
    this.cartItems = [];
  }
}
