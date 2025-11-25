import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-step2-address',
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule],
  template: `
    <section class="checkout-step">
      <h2>Adresse de livraison</h2>

      <form>
        <label>Nom</label>
        <input [(ngModel)]="name" name="name">

        <label>Adresse</label>
        <input [(ngModel)]="address" name="address">

        <label>Ville</label>
        <input [(ngModel)]="city" name="city">
      </form>

      <div class="buttons">
        <button routerLink="/shop/checkout/summary" class="back">← Retour</button>

        <button 
          routerLink="/shop/checkout/confirm"
          class="next"
          [queryParams]="{ name: name, address: address, city: city }">
          Confirmer →
        </button>
      </div>
    </section>
  `,
  styles: [`
    .checkout-step { max-width: 600px; margin: 20px auto; padding: 20px; }
    form { display: flex; flex-direction: column; gap: 10px; margin-bottom: 20px; }
    input { padding: 8px; border: 1px solid #ccc; border-radius: 6px; }
    .buttons { display: flex; justify-content: space-between; margin-top: 30px; }
    .back, .next { padding: 10px 20px; border-radius: 6px; border: none; cursor: pointer; }
    .back { background: #ddd; }
    .next { background: #6200ea; color: white; }
  `]
})
export class Step2AddressComponent {
  name = '';
  address = '';
  city = '';
}
