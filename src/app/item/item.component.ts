import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Candidat } from '../models/candidat';

@Component({
  selector: 'app-item',
  standalone: false,
  templateUrl: './item.component.html',
  styleUrl: './item.component.css',
})
export class ItemComponent {
  @Input() oneCandidate: Candidat;
  @Output() eventToListe = new EventEmitter();

  sendCandidateToListe() {
    this.eventToListe.emit(this.oneCandidate._id);
  }
}
