import { Component, inject, Input } from '@angular/core';
import { Candidat } from '../models/candidat';
import { GestionRecruesService } from '../services/gestion-recrues.service';
import { GestionCandidatsService } from '../services/gestion-candidats.service';

@Component({
  selector: 'app-details',
  standalone: false,
  templateUrl: './details.component.html',
  styleUrl: './details.component.css',
})
export class DetailsComponent {
  @Input() selCandId;
  selCand: Candidat;

  public recrueService = inject(GestionRecruesService);
  public candSer = inject(GestionCandidatsService);

  ngOnChanges() {
    this.candSer.getCandidatByIdAPI(this.selCandId).subscribe({
      next: (response: Candidat) => {
        console.log(response);

        this.selCand = response;
      },
    });
  }

  recruterHandler() {
    //this.recrueService.addRecrue(this.selCand);
    if (!this.selCand.recrue) this.recrueService.addRecrueAPI(this.selCand._id);
    else this.recrueService.deleteRecrueAPI(this.selCand._id);
    this.selCand.recrue = !this.selCand.recrue;
  }
}
