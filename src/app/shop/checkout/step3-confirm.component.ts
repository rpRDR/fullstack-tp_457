import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-step3-confirm',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <section class="checkout-step">
      <h2>Confirmation</h2>

      <p>Merci <strong>{{ name }}</strong> !</p>
      <p>Votre commande a bien été enregistrée 🎉</p>

      <button routerLink="/shop/products" class="back">
        ← Retour aux produits
      </button>
    </section>
  `,
  styles: [`
    .checkout-step { max-width: 600px; margin: 20px auto; padding: 20px; }
    .back { margin-top: 20px; padding: 10px 20px; background: #ddd; border: none; border-radius: 6px; cursor: pointer; }
  `]
})
export class Step3ConfirmComponent {
  name = 'client';

  constructor(private route: ActivatedRoute) {
    this.route.queryParams.subscribe(q => {
      this.name = q['name'] || 'client';
    });
  }
}
