import { Component, inject, Input } from '@angular/core';
import { Candidat } from '../models/candidat';
import { GestionRecruesService } from '../services/gestion-recrues.service';

@Component({
  selector: 'app-details',
  standalone: false,
  templateUrl: './details.component.html',
  styleUrl: './details.component.css',
})
export class DetailsComponent {
  @Input() selCand: Candidat;

  private recrueService = inject(GestionRecruesService);

  recruterHandler() {
    this.recrueService.addRecrue(this.selCand);
  }
}
