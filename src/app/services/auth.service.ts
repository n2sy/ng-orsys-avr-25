import { HttpClient } from '@angular/common/http';
import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  link = 'http://localhost:3000/auth';
  //isLoggedIn = signal(false);
  isLoggedIn = false;

  constructor(private http: HttpClient) {}

  inscription(identifiants) {
    return this.http.post(`${this.link}/register`, identifiants);
  }
  connexion(identifiants) {
    return this.http.post(`${this.link}/login`, identifiants);
  }
  deconnexion() {
    localStorage.removeItem('access_token');
    this.isLoggedIn = false;
  }
  //   estConnecte() {
  //     let token = localStorage.getItem('access_token');
  //     if (token) return true;
  //     return false;

  //     // return !!localStorage.getItem("access_token");
  //   }
}
