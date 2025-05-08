import { Injectable, signal } from '@angular/core';
import { Candidat } from '../models/candidat';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class GestionRecruesService {
  public allRecrues = signal<Candidat[]>([]);
  link = 'http://localhost:3000/cv';

  constructor(private http: HttpClient) {}

  getAllRecrues() {
    return this.allRecrues();
  }
  getAllRecruesAPI() {
    this.http.get(`${this.link}/recrues`).subscribe({
      next: (response: Candidat[]) => {
        console.log(response);

        this.allRecrues.set(response);
      },
    });
  }

  getRecrueById(id) {
    console.log(id);

    return this.allRecrues().find((r) => r._id == id);
  }

  addRecrueAPI(id) {
    this.http
      .patch(`${this.link}/candidats/recruter/${id}`, { recrue: true })
      .subscribe({
        next: (response) => {
          alert(response['message']);
          this.getAllRecruesAPI();
        },
      });
  }
  deleteRecrueAPI(id) {
    this.http
      .patch(`${this.link}/candidats/recruter/${id}`, { recrue: false })
      .subscribe({
        next: (response) => {
          alert(response['message']);
          this.getAllRecruesAPI();
        },
      });
  }

  //   addRecrue(newRecrue: Candidat) {
  //     if (this.allRecrues.indexOf(newRecrue) == -1)
  //       this.allRecrues.push(newRecrue);
  //     else alert('Ce candidat a déjà été recruté !');
  //   }
}
