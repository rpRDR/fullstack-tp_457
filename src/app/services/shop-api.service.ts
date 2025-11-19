import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ShopApiService {
  constructor(private http: HttpClient) {}

  // === AUTH ===
  login(body: { username: string; password: string }) {
    return this.http.post('/api/auth/token/', body);
  }

  refresh(refresh: string) {
    return this.http.post('/api/auth/token/refresh/', { refresh });
  }

  // === PRODUCTS LIST ===
  getProducts({ page, pageSize, minRating, ordering }: {
    page: number;
    pageSize: number;
    minRating?: number;
    ordering?: string;
  }) {
    return this.http.get('/api/products/', {
      params: {
        page: page,
        page_size: pageSize,
        min_rating: minRating ?? '',
        ordering: ordering ?? '',
      }
    });
  }

  // === PRODUCT RATING ===
  getRating(id: number) {
    return this.http.get(`/api/products/${id}/rating/`);
  }
}
