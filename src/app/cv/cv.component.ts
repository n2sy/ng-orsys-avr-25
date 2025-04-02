import { Component, inject, OnInit } from '@angular/core';
import { Candidat } from '../models/candidat';
import { FirstService } from '../services/first.service';

@Component({
  selector: 'app-cv',
  standalone: false,
  templateUrl: './cv.component.html',
  styleUrl: './cv.component.css',
  providers: [FirstService],
})
export class CvComponent {
  tabCandidates: Candidat[] = [
    new Candidat(1, 'bart', 'simpson', 25, 'ingénieur', 'bart.jpeg'),
    new Candidat(2, 'homer', 'simpson', 48, 'chef de projet', 'homer.png'),
    new Candidat(3, 'lisa', 'simpson', 21, 'designer', 'lisa.png'),
    new Candidat(4, 'nidhal', 'jelassi', 42, 'formateur'),
  ];
  selectedCandidate: Candidat;

  //1ère manière Injection de dépendances
  constructor(private firstSer: FirstService) {}

  //2ème manière Injection de dépendances
  private firstSerV2 = inject(FirstService);

  ngOnInit() {
    this.firstSerV2.showInfos();
  }

  saveSelectedCandidate(cand) {
    this.selectedCandidate = cand;
  }
}
