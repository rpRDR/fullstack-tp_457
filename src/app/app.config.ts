import {
  ApplicationConfig,
  provideBrowserGlobalErrorListeners,
  provideZoneChangeDetection,
  isDevMode,
  importProvidersFrom,
} from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';

// Http & Forms
import { provideHttpClient, withFetch } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

// === NGXR IMPORTS ===
import { provideStore } from '@ngrx/store';
import { provideEffects } from '@ngrx/effects';
import { provideStoreDevtools } from '@ngrx/store-devtools';

// === REDUCERS ===
import { authReducer } from './state/auth/auth.reducer';
import { productsReducer } from './state/products/products.reducer';
import { cartReducer } from './state/cart/cart.reducer';

// === EFFECTS ===
import { AuthEffects } from './state/auth/auth.effects';
import { ProductsEffects } from './state/products/products.effects';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),

    // 🟩 HTTP FULL MODE (Angular 17)
    provideHttpClient(withFetch()),

    // 🟩 FormsModule pour ngModel
    importProvidersFrom(FormsModule),

    // 🟩 NGXR STORE & EFFECTS
    provideStore({
      auth: authReducer,
      products: productsReducer,
      cart: cartReducer,
    }),
    provideEffects([AuthEffects, ProductsEffects]),

    // 🟩 DEVTOOLS
    provideStoreDevtools({
      maxAge: 25,
      logOnly: !isDevMode(),
    }),

    
  ],
};
