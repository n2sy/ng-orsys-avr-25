import { Injectable } from '@angular/core';
import { Candidat } from '../models/candidat';

@Injectable({
  providedIn: 'root',
})
export class GestionCandidatsService {
  private listCandidates: Candidat[] = [
    new Candidat(1, 'bart', 'simpson', 25, 'ingénieur', 'bart.jpeg'),
    new Candidat(2, 'homer', 'simpson', 48, 'chef de projet', 'homer.png'),
    new Candidat(3, 'lisa', 'simpson', 21, 'designer', 'lisa.png'),
    new Candidat(4, 'nidhal', 'jelassi', 42, 'formateur'),
  ];

  getAllCandidates() {
    return this.listCandidates;
  }

  getCandidatById(selectedId: any) {
    return this.listCandidates.find((cand) => cand.id == selectedId);
  }

  addNewCandidate(newCand) {
    newCand.id = this.listCandidates[this.listCandidates.length - 1].id + 1;
    this.listCandidates.push(newCand);
  }

  updateCandidat(uCand) {
    let i = this.listCandidates.findIndex((cand) => cand.id == uCand.id);
    this.listCandidates[i] = uCand;
  }

  deleteCandidat(id) {
    let i = this.listCandidates.findIndex((cand) => cand.id == id);
    this.listCandidates.splice(i, 1);
  }

  //   addCandidate() {
  //     this.listCandidates.push(
  //       new Candidat(5, 'NEW', 'CANDIDAT', 21, 'designer', 'lisa.png')
  //     );
  //   }

  constructor() {}
}
