import { Component } from '@angular/core';

@Component({
  selector: 'app-first',
  standalone: false,
  templateUrl: './first.component.html',
  //template: '<h1>Salut Tony </h1>',
})
export class FirstComponent {
  prenom: string = 'tony';
  cl: string = 'pink';
  hd: boolean = false;

  clickHandler() {
    alert("J'ai été cliqué !");
  }

  editerPrenom(newValuePrenom: any) {
    this.prenom = newValuePrenom;
  }
}
