import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'ng-orsys-avr-25';

  lireLettreV2(lettre: any) {
    console.log(lettre);
  }
}
