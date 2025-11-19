import { createReducer, on } from '@ngrx/store';
import * as ProductsActions from './products.actions';

export interface ProductsState {
  list: any[];
  loading: boolean;
  error: string | null;
  count: number;
  lastRating: any | null;
}

export const initialState: ProductsState = {
  list: [],
  loading: false,
  error: null,
  count: 0,
  lastRating: null,
};

export const productsReducer = createReducer(
  initialState,

  // === LOAD PRODUCTS ===
  on(ProductsActions.loadProducts, (state) => ({
    ...state,
    loading: true,
    error: null
  })),

  on(ProductsActions.loadProductsSuccess, (state, { data }) => ({
    ...state,
    loading: false,
    error: null,
    list: data.results,
    count: data.count
  })),

  on(ProductsActions.loadProductsFailure, (state, { error }) => ({
    ...state,
    loading: false,
    error
  })),

  // === LOAD RATING ===
  on(ProductsActions.loadRating, (state) => ({
    ...state,
    loading: true,
    error: null
  })),

  on(ProductsActions.loadRatingSuccess, (state, { rating }) => ({
    ...state,
    loading: false,
    lastRating: rating
  })),

  on(ProductsActions.loadRatingFailure, (state, { error }) => ({
    ...state,
    loading: false,
    error
  }))
);
