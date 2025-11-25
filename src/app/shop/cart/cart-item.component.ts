import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-cart-item',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="item">
      <div class="info">
        <h4>{{ item.product.name }}</h4>
        <p>€ {{ item.product.price }}</p>
      </div>

      <div class="qty">
        <button (click)="update(item.quantity - 1)" [disabled]="item.quantity <= 1">-</button>
        <span>{{ item.quantity }}</span>
        <button (click)="update(item.quantity + 1)">+</button>
      </div>

      <button class="remove" (click)="remove.emit(item.product.id)">✖</button>
    </div>
  `,
  styles: [`
    .item {
      display: flex;
      align-items: center;
      padding: 10px;
      border-bottom: 1px solid #ddd;
      justify-content: space-between;
    }
    .info h4 { margin: 0; font-size: 16px; }
    .qty {
      display: flex;
      align-items: center;
      gap: 8px;
    }
    .qty button {
      padding: 4px 8px;
      cursor: pointer;
    }
    .remove {
      background: none;
      border: none;
      color: red;
      font-size: 20px;
      cursor: pointer;
    }
  `]
})
export class CartItemComponent {
  @Input() item: any;
  @Output() changeQuantity = new EventEmitter<number>();
  @Output() remove = new EventEmitter<number>();

  update(newQty: number) {
    this.changeQuantity.emit(newQty);
  }
}
