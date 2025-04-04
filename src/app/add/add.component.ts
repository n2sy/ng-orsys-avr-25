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

  addHandler(formValue) {
    this.candSer.addNewCandidate(formValue);
    this.router.navigateByUrl('/cv');
  }
}
