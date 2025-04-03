import { Component, inject, OnInit } from '@angular/core';
import { Candidat } from '../models/candidat';
import { FirstService } from '../services/first.service';
import { GestionCandidatsService } from '../services/gestion-candidats.service';

@Component({
  selector: 'app-cv',
  standalone: false,
  templateUrl: './cv.component.html',
  styleUrl: './cv.component.css',
  providers: [FirstService],
})
export class CvComponent {
  tabCandidates: Candidat[] = [];
  selectedCandidate: Candidat;

  //1ère manière Injection de dépendances
  constructor(private firstSer: FirstService) {}

  //2ème manière Injection de dépendances
  private candSer = inject(GestionCandidatsService);

  ngOnInit() {
    this.tabCandidates = this.candSer.getAllCandidates();
    this.firstSer.showInfos();
  }

  saveSelectedCandidate(cand) {
    this.selectedCandidate = cand;
  }

  addNewCandidate() {
    this.candSer.addCandidate();
  }

  showCandidates() {
    console.log(this.candSer.getAllCandidates());
  }
}
