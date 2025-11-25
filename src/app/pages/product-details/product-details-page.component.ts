import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { ShopApiService } from '../../services/shop-api.service';
import { Store } from '@ngrx/store';
import * as CartActions from '../../state/cart/cart.actions';

@Component({
  selector: 'app-product-details-page',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <section *ngIf="product">
      <h2>{{ product.name }}</h2>

      <p>Prix : € {{ product.price }}</p>
      <p>Créé le : {{ product.created_at }}</p>
      <p *ngIf="product.avg_rating">⭐ Note : {{ product.avg_rating }}</p>

      <button class="add" (click)="addToCart()">
        Ajouter au panier 🛒
      </button>
    </section>

    <p *ngIf="!product">Chargement...</p>
  `,
})
export class ProductDetailsPageComponent {
  private route = inject(ActivatedRoute);
  private api = inject(ShopApiService);
  private store = inject(Store);

  product: any = null;

  ngOnInit() {
    const id = Number(this.route.snapshot.paramMap.get('id'));

    this.api.getProductById(id).subscribe(res => {
      this.product = res;
    });
  }

  addToCart() {
    if (!this.product) return;
    this.store.dispatch(
      CartActions.addItem({
        product: this.product,
        quantity: 1
      })
    );
  }
}
