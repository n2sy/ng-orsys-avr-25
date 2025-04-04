import { Injectable } from '@angular/core';
import { Candidat } from '../models/candidat';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

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
  link = 'http://localhost:3000/cv/candidats';

  constructor(private http: HttpClient) {}

  getAllCandidates() {
    return this.listCandidates;
  }

  getAllCandidatesAPI(): Observable<Candidat[]> {
    return this.http.get<Candidat[]>(this.link);
  }

  getCandidatById(selectedId: any) {
    return this.listCandidates.find((cand) => cand._id == selectedId);
  }

  getCandidatByIdAPI(selectedId: any) {
    return this.http.get(`${this.link}/${selectedId}`);
  }

  addNewCandidate(newCand) {
    newCand.id = this.listCandidates[this.listCandidates.length - 1]._id + 1;
    this.listCandidates.push(newCand);
  }

  addNewCandidateAPI(newCand) {
    return this.http.post(`${this.link}`, newCand);
    //    else {
    //     alert("La requete ne part pas")
    //    }
  }

  uploadAvatar(f: FormData) {
    return this.http.post('http://localhost:3000/images/upload', f);
  }

  updateCandidat(uCand) {
    let i = this.listCandidates.findIndex((cand) => cand._id == uCand.id);
    this.listCandidates[i] = uCand;
  }
  updateCandidatAPI(uCand) {
    return this.http.put(`${this.link}/${uCand._id}`, uCand);
  }

  deleteCandidat(id) {
    let i = this.listCandidates.findIndex((cand) => cand._id == id);
    this.listCandidates.splice(i, 1);
  }

  deleteCandidatAPI(id) {
    return this.http.delete(`${this.link}/${id}`);
  }

  //   addCandidate() {
  //     this.listCandidates.push(
  //       new Candidat(5, 'NEW', 'CANDIDAT', 21, 'designer', 'lisa.png')
  //     );
  //   }
}
