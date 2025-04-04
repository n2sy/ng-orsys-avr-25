import { Component, inject } from '@angular/core';
import { GestionCandidatsService } from '../services/gestion-candidats.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add',
  standalone: false,
  templateUrl: './add.component.html',
  styleUrl: './add.component.css',
})
export class AddComponent {
  private candSer = inject(GestionCandidatsService);
  private router = inject(Router);

  addHandler(formValue, event) {
    let formData = new FormData();
    formData.append('avatar', event.target[4].files[0]);
    this.candSer.uploadAvatar(formData).subscribe({
      next: (response) => {
        console.log(response);
        formValue.avatar = response['fileName'];
        this.candSer.addNewCandidateAPI(formValue).subscribe({
          next: (response) => {
            alert(response['message']);
            this.router.navigateByUrl('/cv');
          },
          error: (err) => {
            console.log("Erreur lors de l'ajout d'un candidat");
          },
        });
      },
      error: (err) => {
        console.log("Erreur lors de l'upload de l'avatar", err);
      },
    });

    // this.candSer.addNewCandidate(formValue);
    // this.router.navigateByUrl('/cv');
  }
}
