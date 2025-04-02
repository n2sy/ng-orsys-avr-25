import { Component } from '@angular/core';

@Component({
  selector: 'app-add-account',
  standalone: false,
  templateUrl: './add-account.component.html',
  styleUrl: './add-account.component.css',
})
export class AddAccountComponent {
  allOptions = ['', 'active', 'inactive', 'unknown'];

  onAddAccount(n, s) {
    console.log(n, s);
  }
}
