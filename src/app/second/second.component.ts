import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-second',
  standalone: false,
  templateUrl: './second.component.html',
})
export class SecondComponent {
  @Input() txtColor: string;

  @Output() eventToParent = new EventEmitter();

  sendMessage() {
    this.eventToParent.emit('Lettre de la part de votre enfant');
  }
}
