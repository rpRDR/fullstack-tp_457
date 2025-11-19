import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-product-card',
  standalone: true,
  imports: [CommonModule, MatCardModule],
  template: `
    <mat-card class="card">
      <mat-card-header>
        <mat-card-title>{{ name }}</mat-card-title>
        <mat-card-subtitle>{{ created_at | date:'mediumDate' }}</mat-card-subtitle>
      </mat-card-header>

      <img mat-card-image src="https://picsum.photos/400/200" alt="Product image" />

      <mat-card-content>
        <p class="price">{{ price | currency:'EUR' }}</p>
        <p *ngIf="avgRating !== null" class="rating">
          ⭐ {{ avgRating.toFixed(1) }} / 5
        </p>
      </mat-card-content>
    </mat-card>
  `,
  styles: [`
    .card { width: 100%; max-width: 350px; margin: auto; }
    .price { font-size: 1.1rem; font-weight: bold; margin-top: 10px; }
    .rating { color: #ffaa00; font-weight: 600; }
  `]
})
export class ProductCardComponent {
  @Input() name!: string;
  @Input() created_at!: string;
  @Input() price!: number;
  @Input() avgRating: number | null = null;
}
