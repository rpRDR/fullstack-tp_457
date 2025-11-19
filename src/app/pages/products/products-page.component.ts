import { Component, inject } from '@angular/core';
import { Store } from '@ngrx/store';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

import { ProductCardComponent } from '../../components/product-card/product-card.component';

import { loadProducts } from '../../state/products/products.actions';
import {
  selectProductsList,
  selectProductsLoading,
  selectProductsError,
  selectProductsCount
} from '../../state/products/products.selectors';

@Component({
  selector: 'app-products-page',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,

    // Material
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatProgressSpinnerModule,

    // Components
    ProductCardComponent
  ],
  template: `
    <section class="container">

      <h2 class="title">Produits</h2>

      <!-- === FILTRES === -->
      <form (ngSubmit)="applyFilters()" class="filters">
        <mat-form-field appearance="outline">
          <mat-label>Page</mat-label>
          <input matInput type="number" [(ngModel)]="page" name="page">
        </mat-form-field>

        <mat-form-field appearance="outline">
          <mat-label>Page Size</mat-label>
          <input matInput type="number" [(ngModel)]="pageSize" name="pageSize">
        </mat-form-field>

        <mat-form-field appearance="outline">
          <mat-label>Min Rating</mat-label>
          <input matInput type="number" [(ngModel)]="minRating" name="minRating">
        </mat-form-field>

        <mat-form-field appearance="outline">
          <mat-label>Ordering</mat-label>
          <input matInput [(ngModel)]="ordering" name="ordering" placeholder="-created_at">
        </mat-form-field>

        <button mat-raised-button color="primary">Appliquer</button>
      </form>

      <!-- === LOADING === -->
      <div *ngIf="loading$ | async" class="loading">
        <mat-spinner diameter="40"></mat-spinner>
      </div>

      <!-- === ERROR === -->
      <p *ngIf="error$ | async as error" class="error">
        ⚠ Erreur : {{ error }}
      </p>

      <!-- === LISTE PRODUITS === -->
      <div class="grid" *ngIf="products$ | async as products">
        <app-product-card
          *ngFor="let p of products"
          [name]="p.name"
          [created_at]="p.created_at"
          [price]="p.price"
          [avgRating]="p.avg_rating || null">
        </app-product-card>
      </div>

      <p class="count" *ngIf="count$ | async as total">
        Total : {{ total }} produits
      </p>
    </section>
  `,
  styles: [`
    .container { max-width: 900px; margin: 20px auto; padding: 10px; }
    .title { font-size: 1.8rem; font-weight: bold; margin-bottom: 20px; }
    .filters { display: flex; flex-wrap: wrap; gap: 15px; margin-bottom: 20px; }
    .grid {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
      gap: 20px;
    }
    .loading { display: flex; justify-content: center; margin-top: 20px; }
    .error { color: #d22; font-weight: bold; margin: 10px 0; }
    .count { margin-top: 20px; font-weight: bold; }
  `]
})
export class ProductsPageComponent {

  private store = inject(Store);

  // Default filters
  page = 1;
  pageSize = 10;
  minRating: number | null = null;
  ordering: string | null = null;

  // Selectors
  products$ = this.store.select(selectProductsList);
  loading$ = this.store.select(selectProductsLoading);
  error$ = this.store.select(selectProductsError);
  count$ = this.store.select(selectProductsCount);

  ngOnInit() {
    this.applyFilters();
  }

  applyFilters() {
    this.store.dispatch(loadProducts({
      page: this.page,
      pageSize: this.pageSize,
      minRating: this.minRating ?? undefined,
      ordering: this.ordering ?? undefined
    }));
  }
}
