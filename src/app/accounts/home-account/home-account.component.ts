import { Component } from '@angular/core';

@Component({
  selector: 'app-home-account',
  standalone: false,
  templateUrl: './home-account.component.html',
  styleUrl: './home-account.component.css',
})
export class HomeAccountComponent {
  tabAccounts = [
    {
      nom: 'Mathieu Account',
      statut: 'active',
    },
    {
      nom: 'Amina Account',
      statut: 'inactive',
    },
  ];
}
