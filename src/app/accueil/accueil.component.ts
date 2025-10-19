import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-accueil',
  standalone: false,
  templateUrl: './accueil.component.html',
  styleUrl: './accueil.component.css',
})
export class AccueilComponent {
  private router = inject(Router);
  private http = inject(HttpClient); // ApolloClient pour GraphQL
  private translate = inject(TranslateService);

  constructor() {
    this.translate.addLangs(['en', 'fr']);
    this.translate.setFallbackLang('fr');
    this.translate.use('fr');
  }

  switchLang(lang: string) {
    this.translate.use(lang);
  }

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
