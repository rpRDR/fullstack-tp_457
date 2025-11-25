import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-cart-icon',
  standalone: true,
  imports: [CommonModule],
  template: `
    <button class="cart-btn">
      🛒
      <span class="badge" *ngIf="count > 0">{{ count }}</span>
    </button>
  `,
  styles: [`
    .cart-btn {
      background: none;
      border: none;
      position: relative;
      font-size: 24px;
      cursor: pointer;
    }
    .badge {
      position: absolute;
      top: -6px;
      right: -6px;
      background: #e91e63;
      color: white;
      font-size: 12px;
      padding: 2px 6px;
      border-radius: 50%;
    }
  `]
})
export class CartIconComponent {
  @Input() count = 0;
}
