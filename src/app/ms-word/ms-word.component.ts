import { Component } from '@angular/core';

@Component({
  selector: 'app-ms-word',
  standalone: false,
  templateUrl: './ms-word.component.html',
  styleUrl: './ms-word.component.css',
})
export class MsWordComponent {
  bgColor;
  txtColor;
  txtFont;
  txtSize;

  updateTextSize(newSize) {
    let unite = prompt('Veuillez saisir une unité');
    this.txtSize = `${newSize}${unite}`;
  }
}
