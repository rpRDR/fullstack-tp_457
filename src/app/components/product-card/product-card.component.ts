import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-product-card',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
   <div class="card" [routerLink]="routerLink">

      <h3>{{ name }}</h3>
      <p>Prix : € {{ price }}</p>
      <p>Créé le : {{ created_at }}</p>
      <p *ngIf="avgRating">⭐ {{ avgRating }}</p>
    </div>
  `,
  styles: [`
    .card {
      padding: 16px;
      border: 1px solid #ccc;
      border-radius: 6px;
      cursor: pointer;
    }
  `]
})
export class ProductCardComponent {
  @Input() name!: string;
  @Input() price!: number;
  @Input() created_at!: string;
  @Input() avgRating!: number | null;

  // 🔥 Fix typage
  @Input() routerLink: string | any[] | null = null;
}
