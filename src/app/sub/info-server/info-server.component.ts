import { Component, inject } from '@angular/core';
import { GestionServersService } from '../gestion-servers.service';
import { ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-info-server',
  standalone: false,
  templateUrl: './info-server.component.html',
  styleUrl: './info-server.component.css',
})
export class InfoServerComponent {
  selectedServer;
  showEditBtn: boolean = false;
  private serverService = inject(GestionServersService);
  private actRoute = inject(ActivatedRoute);

  ngOnInit() {
    // this.selectedServer = this.serverService.getServerById(
    //   this.actRoute.snapshot.paramMap.get('id')
    // );

    this.actRoute.paramMap.subscribe({
      next: (p: ParamMap) => {
        this.selectedServer = this.serverService.getServerById(p.get('id'));
      },
    });

    this.actRoute.queryParamMap.subscribe({
      next: (q: ParamMap) => {
        this.showEditBtn = q.get('allowEdit') == '1' ? true : false;
      },
    });
  }
}
