import { Component } from '@angular/core';
import { Candidat } from '../models/candidat';

@Component({
  selector: 'app-cv',
  standalone: false,
  templateUrl: './cv.component.html',
  styleUrl: './cv.component.css',
})
export class CvComponent {
  tabCandidates: Candidat[] = [
    new Candidat(1, 'bart', 'simpson', 25, 'ingénieur', 'bart.jpeg'),
    new Candidat(2, 'homer', 'simpson', 48, 'chef de projet', 'homer.png'),
    new Candidat(3, 'lisa', 'simpson', 21, 'designer', 'lisa.png'),
    new Candidat(4, 'nidhal', 'jelassi', 42, 'formateur'),
  ];
  selectedCandidate: Candidat;

  saveSelectedCandidate(cand) {
    this.selectedCandidate = cand;
  }
}
