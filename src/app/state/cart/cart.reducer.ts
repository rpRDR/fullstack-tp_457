import { createReducer, on } from '@ngrx/store';
import * as CartActions from './cart.actions';

export interface CartItem {
  product: any;
  quantity: number;
}

export interface CartState {
  items: CartItem[];
  count: number;
  totalPrice: number;
}

const initialState: CartState = {
  items: [],
  count: 0,
  totalPrice: 0,
};

function computeTotals(items: CartItem[]) {
  let count = 0;
  let totalPrice = 0;

  for (const item of items) {
    count += item.quantity;
    totalPrice += item.product.price * item.quantity;
  }

  return { count, totalPrice };
}

export const cartReducer = createReducer(
  initialState,

  on(CartActions.addItem, (state, { product, quantity }) => {
    const existing = state.items.find(i => i.product.id === product.id);

    let newItems: CartItem[];

    if (existing) {
      // produit déjà dans le panier
      newItems = state.items.map(i =>
        i.product.id === product.id
          ? { ...i, quantity: i.quantity + quantity }
          : i
      );
    } else {
      // produit ajouté pour la première fois
      newItems = [...state.items, { product, quantity }];
    }

    const totals = computeTotals(newItems);

    return {
      ...state,
      items: newItems,
      ...totals,
    };
  }),

  on(CartActions.removeItem, (state, { productId }) => {
    const newItems = state.items.filter(i => i.product.id !== productId);
    const totals = computeTotals(newItems);

    return {
      ...state,
      items: newItems,
      ...totals,
    };
  }),

  on(CartActions.updateQuantity, (state, { productId, quantity }) => {
    const newItems = state.items.map(i =>
      i.product.id === productId ? { ...i, quantity } : i
    );

    const totals = computeTotals(newItems);

    return {
      ...state,
      items: newItems,
      ...totals,
    };
  }),

  on(CartActions.clearCart, state => ({
    ...state,
    items: [],
    count: 0,
    totalPrice: 0,
  }))
);
