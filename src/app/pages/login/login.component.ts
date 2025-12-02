import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  imports: [CommonModule, FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
        // Objeto para armazenar os dados do formulário
  loginData = {
    email: '',
    password: '',
    agreeToTerms: false
  };

  onSubmit() {
    if (this.loginData.agreeToTerms) {
      console.log('Tentando logar com:', this.loginData);
      // Aqui você colocará a chamada para o seu AuthService
    } else {
      alert('Por favor, aceite os termos para continuar.');
    }
  }
}
