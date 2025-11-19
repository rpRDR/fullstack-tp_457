import { createSelector, createFeatureSelector } from '@ngrx/store';
import { ProductsState } from './products.reducer';

export const selectProductsState =
  createFeatureSelector<ProductsState>('products');

export const selectProductsList = createSelector(
  selectProductsState,
  (state) => state.list
);

export const selectProductsLoading = createSelector(
  selectProductsState,
  (state) => state.loading
);

export const selectProductsError = createSelector(
  selectProductsState,
  (state) => state.error
);

export const selectProductsCount = createSelector(
  selectProductsState,
  (state) => state.count
);

export const selectLastRating = createSelector(
  selectProductsState,
  (state) => state.lastRating
);
