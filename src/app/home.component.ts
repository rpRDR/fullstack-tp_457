import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'app-home',
  template: `
    <section class="mx-auto max-w-3xl px-4 py-10">
      <h1 class="text-3xl font-bold tracking-tight text-blue-600">Bienvenue sur My Shop</h1>

      <p class="mt-2 text-gray-600">Découvrez nos produits, promos et nouveautés.</p>

      <div class="mt-6 rounded-xl border p-6 shadow-sm">
        <h2 class="text-xl font-semibold">Offre du jour</h2>
        <p class="mt-1 text-sm text-gray-500">-20% sur la sélection “Rentrée”.</p>

        <button
          class="mt-4 inline-flex items-center gap-2 rounded-lg bg-blue-600 px-4 py-2 font-medium text-white hover:bg-blue-700 active:scale-[.98]"
        >
          Voir les offres
          <span class="inline-block h-2 w-2 rounded-full bg-white/80"></span>
        </button>
      </div>

      <div class="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2">
        <div class="rounded-lg border p-4">
          <p class="text-sm text-gray-500">Livraison</p>
          <p class="text-lg font-semibold">Gratuite dès 50€</p>
        </div>
        <div class="rounded-lg border p-4">
          <p class="text-sm text-gray-500">Retours</p>
          <p class="text-lg font-semibold">Sous 30 jours</p>
        </div>
      </div>
    </section>
  `,
})
export class HomeComponent {}
