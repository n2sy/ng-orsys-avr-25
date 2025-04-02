import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-add-account',
  standalone: false,
  templateUrl: './add-account.component.html',
  styleUrl: './add-account.component.css',
})
export class AddAccountComponent {
  allOptions = ['', 'active', 'inactive', 'unknown'];
  @Output() eventToHome = new EventEmitter();

  onAddAccount(n, s) {
    this.eventToHome.emit({
      nom: n,
      statut: s,
    });
  }
}
