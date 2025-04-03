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

  goToServers(url: string) {
    // Routes statiques
    this.router.navigateByUrl(url);
  }

  goToWord() {
    //Routes Dynamiques
    this.router.navigate(['ms-word']);
  }
}
