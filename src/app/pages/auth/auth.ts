import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-auth',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './auth.html',
})
export class AuthPage {
  mode = signal<'login' | 'register'>('login');

  loginEmail = '';
  loginPassword = '';

  registerName = '';
  registerEmail = '';
  registerPassword = '';
  registerConfirmPassword = '';

  constructor(private router: Router) {}

  setMode(m: 'login' | 'register') {
    this.mode.set(m);
  }

  onLogin() {
    this.router.navigate(['/dashboard']);
  }

  onRegister() {
    this.router.navigate(['/dashboard']);
  }
}
