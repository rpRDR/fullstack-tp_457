import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Store } from '@ngrx/store';
import { CommonModule } from '@angular/common';
import { selectAccessToken } from './state/auth/auth.selectors';

@Component({
  standalone: true,
  selector: 'app-placeholder',
  imports: [RouterLink, CommonModule],
  template: `
    <section class="mx-auto max-w-3xl px-4 py-10 space-y-4">
      <h2 class="text-2xl font-semibold">App Shop — Placeholder</h2>
      <p class="text-gray-600">Ici viendra l’UI cohérente (login, liste produits, avis...).</p>

      <!-- LOGIN STATE -->
      <div *ngIf="access$ | async as access; else notLogged">
        <p class="text-green-600 font-semibold">
          ✔ Connecté (token présent)
        </p>
      </div>

      <ng-template #notLogged>
        <p class="text-red-600 font-semibold">
          ✖ Non connecté
        </p>
      </ng-template>

      <nav class="flex gap-3 pt-2">
        <button routerLink="/login" class="rounded border px-3 py-2 hover:bg-gray-50">Login</button>
        <button routerLink="/shop/products" class="rounded border px-3 py-2 hover:bg-gray-50">Produits</button>
        <button routerLink="/shop/rating" class="rounded border px-3 py-2 hover:bg-gray-50">Rating Produit</button>
        <button routerLink="/dev" class="rounded border px-3 py-2 hover:bg-gray-50">→ Zone de test</button>
        <button routerLink="/" class="rounded border px-3 py-2 hover:bg-gray-50">← Accueil</button>
      </nav>
    </section>
  `
})
export class AppPlaceholderComponent {

  // ✔ INJECTION MODERNE = MARCHE TOUJOURS
  private store = inject(Store);

  // ✔ SAFE CAR LE STORE EXISTE AU MOMENT DE L’INIT
  access$ = this.store.select(selectAccessToken);
}
