import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-item-account',
  standalone: false,
  templateUrl: './item-account.component.html',
  styleUrl: './item-account.component.css',
})
export class ItemAccountComponent {
  @Input() oneAccount;

  updateStatut(newStatut) {
    this.oneAccount.statut = newStatut;
  }
}
