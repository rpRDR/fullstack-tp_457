import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { Store } from '@ngrx/store';

import { CartItemComponent } from './cart-item.component';

import {
  selectCartItems,
  selectCartTotal
} from '../../state/cart/cart.selectors';

import * as CartActions from '../../state/cart/cart.actions';

@Component({
  selector: 'app-cart-page',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,     // <<< obligatoire pour routerLink
    CartItemComponent
  ],
  template: `
    <section class="cart">
      <h2>Votre Panier</h2>

      <ng-container *ngIf="items$ | async as items">
        
        <div *ngIf="items.length === 0">
          🛒 Votre panier est vide.
        </div>

        <app-cart-item
          *ngFor="let item of items"
          [item]="item"
          (changeQuantity)="change(item.product.id, $event)"
          (remove)="remove(item.product.id)">
        </app-cart-item>

        <div class="total" *ngIf="total$ | async as total">
          <h3>Total : € {{ total.toFixed(2) }}</h3>
        </div>

        <button class="checkout"
                *ngIf="items.length > 0"
                routerLink="/shop/checkout/summary">
          Procéder au paiement →
        </button>

      </ng-container>
    </section>
  `,
  styles: [`
    .cart {
      max-width: 600px;
      margin: 20px auto;
      padding: 20px;
    }
    h2 { font-size: 24px; margin-bottom: 20px; }
    .total {
      margin-top: 20px;
      font-size: 20px;
      font-weight: bold;
      text-align: right;
    }
    .checkout {
      background: #6200ea;
      color: white;
      padding: 12px 20px;
      border: none;
      cursor: pointer;
      border-radius: 6px;
      width: 100%;
      margin-top: 20px;
    }
  `]
})
export class CartPageComponent {
  private store = inject(Store);

  items$ = this.store.select(selectCartItems);
  total$ = this.store.select(selectCartTotal);

  change(id: number, qty: number) {
    this.store.dispatch(CartActions.updateQuantity({ productId: id, quantity: qty }));
  }

  remove(id: number) {
    this.store.dispatch(CartActions.removeItem({ productId: id }));
  }
}
