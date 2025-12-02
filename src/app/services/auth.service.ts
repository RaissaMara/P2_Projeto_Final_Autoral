import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

    private apiUrl = 'https://sua-api.com/api/auth/login';

  constructor(private http: HttpClient, private router: Router) { }

login(credentials: any): Observable<any> {
    // Post para o backend
    return this.http.post<any>(this.apiUrl, credentials).pipe(
      // O operador 'tap' permite executar uma ação lateral sem modificar a resposta
      tap(response => {
        if (response && response.token) {
          // Salva o token no navegador
          localStorage.setItem('auth_token', response.token);
          
          // Opcional: Salvar dados do usuário
          localStorage.setItem('user_data', JSON.stringify(response.user));
        }
      })
    );
  }

  logout() {
    // Limpa tudo e manda de volta pro login
    localStorage.removeItem('auth_token');
    localStorage.removeItem('user_data');
    this.router.navigate(['/login']);
  }

  // Método utilitário para saber se está logado
  isLoggedIn(): boolean {
    return !!localStorage.getItem('auth_token');
  }
  
  getToken(): string | null {
    return localStorage.getItem('auth_token');
  }
}