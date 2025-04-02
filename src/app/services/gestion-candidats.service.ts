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

  addCandidate() {
    this.listCandidates.push(
      new Candidat(5, 'NEW', 'CANDIDAT', 21, 'designer', 'lisa.png')
    );
  }

  constructor() {}
}
