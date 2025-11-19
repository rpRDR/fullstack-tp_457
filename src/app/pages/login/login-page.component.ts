import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { login } from '../../state/auth/auth.actions';

// Angular modules
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

// Material
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-login-page',
  standalone: true,
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
      <h2>Login</h2>

      <form (ngSubmit)="submit()" #f="ngForm">
        <mat-form-field appearance="outline" class="full">
          <mat-label>Username</mat-label>
          <input matInput [(ngModel)]="username" name="username" required>
        </mat-form-field>

        <mat-form-field appearance="outline" class="full">
          <mat-label>Password</mat-label>
          <input matInput type="password" [(ngModel)]="password" name="password" required>
        </mat-form-field>

        <button mat-raised-button color="primary" class="full">Login</button>
      </form>
    </mat-card>
  `,
  styles: [`
    mat-card { max-width: 350px; margin: 20px auto; padding: 20px; }
    .full { width: 100%; margin-bottom: 12px; }
  `]
})
export class LoginPageComponent {
  username = 'demo';
  password = 'demo';

  constructor(private store: Store) {}

  submit() {
    this.store.dispatch(login({ username: this.username, password: this.password }));
  }
}
