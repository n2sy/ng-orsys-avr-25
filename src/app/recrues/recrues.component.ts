import { Component, inject } from '@angular/core';
import { GestionRecruesService } from '../services/gestion-recrues.service';
import { Candidat } from '../models/candidat';

@Component({
  selector: 'app-recrues',
  standalone: false,
  templateUrl: './recrues.component.html',
  styleUrl: './recrues.component.css',
})
export class RecruesComponent {
  tabRecrues: Candidat[] = [];
  private recrueSer = inject(GestionRecruesService);

  ngOnInit() {
    this.tabRecrues = this.recrueSer.getAllRecrues();
    // console.log('Nouvelle recrue détectée');
  }
}
