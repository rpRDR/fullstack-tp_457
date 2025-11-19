import { Meta, StoryObj } from '@storybook/angular';
import { ProductCardComponent } from '../components/product-card/product-card.component';

const meta: Meta<ProductCardComponent> = {
  title: 'Shop/ProductCard',
  component: ProductCardComponent,
  args: {
    name: 'Stylo Bleu',
    created_at: '2025-01-10',
    price: 2.50,
    avgRating: 4.3
  },
};

export default meta;
type Story = StoryObj<ProductCardComponent>;

export const Default: Story = {};

export const HighRating: Story = {
  args: {
    name: 'Feutre Rouge',
    avgRating: 5,
  },
};

export const Cheap: Story = {
  args: {
    name: 'Gomme',
    price: 0.99,
  },
};
