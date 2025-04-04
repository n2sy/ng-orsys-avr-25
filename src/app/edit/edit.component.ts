import { Component, inject } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { Candidat } from '../models/candidat';
import { GestionCandidatsService } from '../services/gestion-candidats.service';

@Component({
  selector: 'app-edit',
  standalone: false,
  templateUrl: './edit.component.html',
  styleUrl: './edit.component.css',
})
export class EditComponent {
  candToUpdate: Candidat;
  private activatedRoute = inject(ActivatedRoute);
  private candSer = inject(GestionCandidatsService);
  private router = inject(Router);

  ngOnInit() {
    let id = this.activatedRoute.snapshot.paramMap.get('id');
    this.candSer.getCandidatByIdAPI(id).subscribe({
      next: (response: Candidat) => {
        this.candToUpdate = response;
      },
      error: (err) => {
        this.router.navigateByUrl('/not-found');
      },
    });
  }

  editHandler(formValue) {
    formValue._id = this.candToUpdate._id;
    this.candSer.updateCandidatAPI(formValue).subscribe({
      next: (response) => {
        alert(response['message']);
        this.router.navigateByUrl('/cv');
      },
      error: (err) => {
        console.log(err);
      },
    });
  }
}
