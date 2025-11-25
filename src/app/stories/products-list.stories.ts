import { moduleMetadata } from '@storybook/angular';
import type { Meta, StoryObj } from '@storybook/angular';
import { ProductCardComponent } from '../components/product-card/product-card.component';
import { CommonModule } from '@angular/common';

const meta: Meta = {
  title: 'Shop/ProductsList',
  decorators: [
    moduleMetadata({
      imports: [CommonModule, ProductCardComponent],
    }),
  ],
};

export default meta;
type Story = StoryObj;

export const Default: Story = {
  render: () => ({
    template: `
      <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 20px;">
        <app-product-card
          *ngFor="let p of products"
          [name]="p.name"
          [created_at]="p.created_at"
          [price]="p.price"
          [avgRating]="p.avg_rating">
        </app-product-card>
      </div>
    `,
    props: {
      products: [
        { name: 'Stylo Bleu', created_at: '2025-01-01', price: 2.50, avg_rating: 4.5 },
        { name: 'Trousse Scolaire', created_at: '2025-02-11', price: 6.50, avg_rating: 4.1 },
        { name: 'Gomme Blanche', created_at: '2025-03-01', price: 0.90, avg_rating: 3.8 },
      ],
    }
  })
};
