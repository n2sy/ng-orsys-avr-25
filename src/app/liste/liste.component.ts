import { Component, EventEmitter, inject, Input, Output } from '@angular/core';
import { Candidat } from '../models/candidat';
import { GestionCandidatsService } from '../services/gestion-candidats.service';

@Component({
  selector: 'app-liste',
  standalone: false,
  templateUrl: './liste.component.html',
  styleUrl: './liste.component.css',
  //providers: [GestionCandidatsService],
})
export class ListeComponent {
  allCandidates: Candidat[] = [];
  @Output() eventToCv = new EventEmitter();

  private candSer = inject(GestionCandidatsService);

  ngOnInit() {
    // this.allCandidates = this.candSer.getAllCandidates();
    this.candSer.getAllCandidatesAPI().subscribe({
      next: (response: Candidat[]) => {
        this.allCandidates = response;
      },
      error: (err) => {
        alert('Connexion rompue... Chargement de données fictives');
        this.allCandidates = this.candSer.getAllCandidates();
      },
    });
  }

  sendCandidateToCv(candId) {
    this.eventToCv.emit(candId);
  }

  showCandidates() {
    console.log(this.candSer.getAllCandidates());
  }
}
