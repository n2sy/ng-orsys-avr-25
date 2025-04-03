import { Component, inject } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { GestionServersService } from '../gestion-servers.service';

@Component({
  selector: 'app-edit-server',
  standalone: false,
  templateUrl: './edit-server.component.html',
  styleUrl: './edit-server.component.css',
})
export class EditServerComponent {
  serverToUpdate;

  private serverService = inject(GestionServersService);
  private actRoute = inject(ActivatedRoute);

  ngOnInit() {
    // this.selectedServer = this.serverService.getServerById(
    //   this.actRoute.snapshot.paramMap.get('id')
    // );

    this.actRoute.paramMap.subscribe({
      next: (p: ParamMap) => {
        this.serverToUpdate = this.serverService.getServerById(p.get('id'));
      },
    });
  }
}
