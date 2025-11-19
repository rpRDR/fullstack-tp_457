import { createAction, props } from '@ngrx/store';

// === LOAD PRODUCTS ===
export const loadProducts = createAction(
  '[Products] Load Products',
  props<{ page: number; pageSize: number; minRating?: number; ordering?: string }>()
);

export const loadProductsSuccess = createAction(
  '[Products] Load Products Success',
  props<{ data: any }>()
);

export const loadProductsFailure = createAction(
  '[Products] Load Products Failure',
  props<{ error: string }>()
);

// === LOAD RATING ===
export const loadRating = createAction(
  '[Products] Load Rating',
  props<{ id: number }>()
);

export const loadRatingSuccess = createAction(
  '[Products] Load Rating Success',
  props<{ rating: any }>()
);

export const loadRatingFailure = createAction(
  '[Products] Load Rating Failure',
  props<{ error: string }>()
);
