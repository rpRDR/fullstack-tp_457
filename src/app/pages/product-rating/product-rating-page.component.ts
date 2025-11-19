import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { loadRating } from '../../state/products/products.actions';
import { selectLastRating } from '../../state/products/products.selectors';
import { Observable } from 'rxjs';

// Angular
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

// Material
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';

@Component({
  standalone: true,
  selector: 'app-product-rating-page',
  imports: [
    CommonModule,
    FormsModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule
  ],
  template: `
    <mat-card>
      <h2>Product Rating</h2>

      <form (ngSubmit)="getRating()">
        <mat-form-field appearance="outline" class="full">
          <mat-label>Product ID</mat-label>
          <input matInput type="number" [(ngModel)]="id" name="id" required>
        </mat-form-field>

        <button mat-raised-button color="primary">Fetch Rating</button>
      </form>

      <ng-container *ngIf="rating$ | async as r">
        <p>Avg Rating: {{ r.avg_rating }}</p>
        <p>Count: {{ r.count }}</p>
      </ng-container>
    </mat-card>
  `,
  styles: [`
    .full { width: 100%; }
    mat-card { max-width: 400px; margin: 20px auto; padding: 20px; }
  `]
})
export class ProductRatingPageComponent implements OnInit {

  id!: number;
  rating$!: Observable<any>;

  constructor(private store: Store) {}

  ngOnInit() {
    this.rating$ = this.store.select(selectLastRating);
  }

  getRating() {
    this.store.dispatch(loadRating({ id: this.id }));
  }
}
