import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class GestionServersService {
  private allServers = [
    {
      id: 1,
      nom: 'Anis Server',
      statut: 'online',
    },
    {
      id: 2,
      nom: 'Alex Server',
      statut: 'offline',
    },
    {
      id: 3,
      nom: 'Amina Server',
      statut: 'offline',
    },
  ];

  getAllServers() {
    return this.allServers;
  }

  constructor() {}
}
