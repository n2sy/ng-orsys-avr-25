import { Component, inject } from '@angular/core';
import { GestionServersService } from '../gestion-servers.service';

@Component({
  selector: 'app-home-servers',
  standalone: false,
  templateUrl: './home-servers.component.html',
  styleUrl: './home-servers.component.css',
})
export class HomeServersComponent {
  tabServers = [];
  private serverService = inject(GestionServersService);

  ngOnInit() {
    this.tabServers = this.serverService.getAllServers();
  }
}
