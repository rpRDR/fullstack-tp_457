import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Store } from '@ngrx/store';

import * as CartActions from '../../state/cart/cart.actions';

@Component({
  selector: 'app-product-details-page',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <section class="container" *ngIf="product">
      
      <button class="back" routerLink="/shop/products">
        ← Retour aux produits
      </button>

      <h2>{{ product.name }}</h2>

      <p><strong>Prix :</strong> € {{ product.price }}</p>
      <p><strong>Créé le :</strong> {{ product.created_at }}</p>

      <p class="desc">
        {{ product.description || 'Aucune description fournie.' }}
      </p>

      <div class="buttons">
        <button class="add" (click)="addToCart()">
          Ajouter au panier 🛒
        </button>

        <button class="cart" routerLink="/shop/cart">
          Voir le panier →
        </button>
      </div>

    </section>

    <p *ngIf="loading" class="loading">Chargement...</p>
  `,
  styles: [`
    .container {
      max-width: 600px;
      margin: 20px auto;
      padding: 20px;
    }
    .back {
      background: #ddd;
      border: none;
      padding: 8px 16px;
      border-radius: 6px;
      cursor: pointer;
      margin-bottom: 20px;
    }
    h2 { margin-bottom: 10px; }
    .desc { margin: 15px 0; color: #555; }

    .buttons {
      display: flex;
      gap: 15px;
      margin-top: 25px;
    }

    .add {
      background: #6200ea;
      color: white;
      padding: 12px 20px;
      border: none;
      cursor: pointer;
      border-radius: 6px;
      flex: 1;
    }

    .cart {
      background: #111;
      color: white;
      padding: 12px 20px;
      border: none;
      cursor: pointer;
      border-radius: 6px;
      flex: 1;
    }

    .loading { text-align: center; margin-top: 50px; }
  `]
})
export class ProductDetailsPageComponent {
  private route = inject(ActivatedRoute);
  private http = inject(HttpClient);
  private store = inject(Store);

  product: any = null;
  loading = true;

  ngOnInit() {
    const id = Number(this.route.snapshot.paramMap.get('id'));

    this.http.get(`/api/products/${id}/`).subscribe({
      next: (res) => {
        this.product = res;
        this.loading = false;
      },
      error: () => {
        this.loading = false;
      }
    });
  }

  addToCart() {
    this.store.dispatch(
      CartActions.addItem({ product: this.product, quantity: 1 })
    );
  }
}
