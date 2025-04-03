import { Component, inject } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { GestionCandidatsService } from '../services/gestion-candidats.service';
import { Candidat } from '../models/candidat';

@Component({
  selector: 'app-infos',
  standalone: false,
  templateUrl: './infos.component.html',
  styleUrl: './infos.component.css',
})
export class InfosComponent {
  myId;
  selectedCandidate: Candidat;
  private activatedRoute = inject(ActivatedRoute);
  private candSer = inject(GestionCandidatsService);

  ngOnInit() {
    //1ere méthode
    // console.log(this.activatedRoute.snapshot.params);
    //this.myId = this.activatedRoute.snapshot.paramMap.get('id');
    //2ème méthode

    this.activatedRoute.paramMap.subscribe({
      next: (paramRoute: ParamMap) => {
        //console.log(typeof paramRoute.get('id'));
        let id = paramRoute.get('id');
        this.selectedCandidate = this.candSer.getCandidatById(id);
      },
      //   error: () => {},
      //   complete : () => {

      //   }
    });
  }
}
