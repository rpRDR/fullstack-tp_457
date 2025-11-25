import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { Store } from '@ngrx/store';
import { selectCartItems, selectCartTotal } from '../../state/cart/cart.selectors';

@Component({
  selector: 'app-step1-summary',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
   <section class="checkout-step">
      <h2>Résumé du panier</h2>

      <div *ngIf="items$ | async as items">
        <p *ngFor="let item of items">
          {{ item.product.name }} × {{ item.quantity }} — € {{ item.product.price }}
        </p>
      </div>

      <h3 *ngIf="total$ | async as total">Total : € {{ total }}</h3>

      <div class="buttons">
        <button routerLink="/shop/cart" class="back">← Retour au panier</button>
        <button routerLink="/shop/checkout/address" class="next">Continuer →</button>
      </div>
    </section>
  `,
  styles: [`
    .checkout-step { max-width: 600px; margin: 20px auto; padding: 20px; }
    .buttons { display: flex; justify-content: space-between; margin-top: 30px; }
    .back, .next { padding: 10px 20px; border-radius: 6px; border: none; cursor: pointer; }
    .back { background: #ddd; }
    .next { background: #6200ea; color: white; }
  `]
})
export class Step1SummaryComponent {
  private store = inject(Store);
  items$ = this.store.select(selectCartItems);
  total$ = this.store.select(selectCartTotal);
}
