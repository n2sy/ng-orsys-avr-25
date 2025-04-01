import { Component, Input } from '@angular/core';
import { Candidat } from '../models/candidat';

@Component({
  selector: 'app-liste',
  standalone: false,
  templateUrl: './liste.component.html',
  styleUrl: './liste.component.css',
})
export class ListeComponent {
  @Input() allCandidates: Candidat[] = [];
}
