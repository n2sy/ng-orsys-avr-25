import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-accueil',
  standalone: false,
  templateUrl: './accueil.component.html',
  styleUrl: './accueil.component.css',
})
export class AccueilComponent {
  private router = inject(Router);
  private http = inject(HttpClient); // ApolloClient pour GraphQL

  goToServers(url: string) {
    // Routes statiques
    this.router.navigateByUrl(url);
  }

  goToWord() {
    //Routes Dynamiques
    this.router.navigate(['ms-word']);
  }

  recupererDonneesDepuisAPI() {
    this.http.get('https://jsonplaceholder.typicode.com/users').subscribe({
      next: (response) => {
        console.log(response);
      },
      error: (err) => {
        console.log(err);
      },
      complete: () => {
        console.log('Recupération terminée');
      },
    });
  }
}
