import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appCustomDir]',
  standalone: false,
})
export class CustomDirDirective {
  @HostBinding('style.backgroundColor') bg; // = 'green';
  @HostBinding('style.color') cl; // = 'white';

  constructor() {}

  //Remarque de Bastien
  //   @HostListener('mouseover') hover() {
  //     this.bg = 'grey';
  //     this.cl = 'white';
  //   }
  @HostListener('mouseenter') mouseenter() {
    this.bg = 'grey';
    this.cl = 'white';
  }

  @HostListener('mouseleave') mouseleave() {
    this.bg = 'pink';
    this.cl = 'black';
  }
}
