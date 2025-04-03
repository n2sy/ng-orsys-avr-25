import { Injectable } from '@angular/core';
import { Candidat } from '../models/candidat';

@Injectable({
  providedIn: 'root',
})
export class GestionRecruesService {
  private allRecrues: Candidat[] = [];

  constructor() {}

  getAllRecrues() {
    return this.allRecrues;
  }

  addRecrue(newRecrue: Candidat) {
    if (this.allRecrues.indexOf(newRecrue) == -1)
      this.allRecrues.push(newRecrue);
    else alert('Ce candidat a déjà été recruté !');
  }
}
