import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login-form',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule
  ],
  template: `
    <mat-form-field appearance="outline" class="full">
      <mat-label>Username</mat-label>
      <input matInput [(ngModel)]="username">
    </mat-form-field>

    <mat-form-field appearance="outline" class="full">
      <mat-label>Password</mat-label>
      <input matInput type="password" [(ngModel)]="password">
    </mat-form-field>

    <button mat-raised-button color="primary" (click)="submit()">
      Login
    </button>
  `,
  styles: [`.full { width: 100%; margin-bottom: 10px; }`]
})
export class LoginFormComponent {
  username = '';
  password = '';

  @Output() login = new EventEmitter<{ username: string; password: string }>();

  submit() {
    this.login.emit({ username: this.username, password: this.password });
  }
}
