import { Routes } from '@angular/router';
import { HomeComponent } from './home.component';
import { DevIndexComponent } from './dev/dev-index.component';
import { DevAuthComponent } from './dev/dev-auth.component';
import { DevProductsComponent } from './dev/dev-products.component';
import { DevProductRatingComponent } from './dev/dev-product-rating.component';
import { AppPlaceholderComponent } from './app-placeholder.component';

// === PAGES DU SHOP ===
import { LoginPageComponent } from './pages/login/login-page.component';
import { ProductsPageComponent } from './pages/products/products-page.component';
import { ProductRatingPageComponent } from './pages/product-rating/product-rating-page.component';

// === NIVEAU 2 / PANIER ===
import { CartPageComponent } from './shop/cart/cart-page.component';

// === NIVEAU 3 / DETAILS PRODUIT ===
import { ProductDetailsPageComponent } from './shop/product-details/product-details-page.component';

export const routes: Routes = [
  // === PAGES EXISTANTES (DEV) ===
  { path: '', component: HomeComponent, pathMatch: 'full' },
  { path: 'dev', component: DevIndexComponent },
  { path: 'dev/auth', component: DevAuthComponent },
  { path: 'dev/products', component: DevProductsComponent },
  { path: 'dev/products/:id/rating', component: DevProductRatingComponent },
  { path: 'app', component: AppPlaceholderComponent },

  // === PAGES SHOP ===
  { path: 'login', component: LoginPageComponent },
  { path: 'shop/products', component: ProductsPageComponent },
  { path: 'shop/product/:id', component: ProductDetailsPageComponent },
  { path: 'shop/rating', component: ProductRatingPageComponent },
  { path: 'shop/cart', component: CartPageComponent },

  {
    path: 'shop/checkout/summary',
    loadComponent: () =>
      import('./shop/checkout/step1-summary.component')
        .then(m => m.Step1SummaryComponent)
  },
  {
    path: 'shop/checkout/address',
    loadComponent: () =>
      import('./shop/checkout/step2-address.component')
        .then(m => m.Step2AddressComponent)
  },
  {
    path: 'shop/checkout/confirm',
    loadComponent: () =>
      import('./shop/checkout/step3-confirm.component')
        .then(m => m.Step3ConfirmComponent)
  },




  // === WILDCARD ===
  { path: '**', redirectTo: '' },
];
