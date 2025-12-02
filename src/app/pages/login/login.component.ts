import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

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
  isLoading = false; // Para desabilitar o botão enquanto carrega
    errorMessage = ''; // Para mostrar erros na tela

    // Injete o AuthService e o Router
    constructor(private authService: AuthService, private router: Router) {}
  onSubmit() {
 if (!this.loginData.agreeToTerms) {
      alert('Por favor, aceite os termos.');
      return;
    }

    this.isLoading = true;
    this.errorMessage = '';

    // Chamada real ao serviço
    this.authService.login({
      email: this.loginData.email,
      password: this.loginData.password
    }).subscribe({
      next: (response: any) => {
        console.log('Login realizado com sucesso!', response);
        this.isLoading = false;
        // Redireciona para a home ou dashboard
        this.router.navigate(['/dashboard']); 
      },
      error: (error: any) => {
        console.error('Erro de login:', error);
        this.isLoading = false;
        // Tratamento simples de erro
        if (error.status === 401) {
          this.errorMessage = 'E-mail ou senha inválidos.';
        } else {
          this.errorMessage = 'Erro ao conectar com o servidor. Tente mais tarde.';
        }
      }
    });
  }
}
