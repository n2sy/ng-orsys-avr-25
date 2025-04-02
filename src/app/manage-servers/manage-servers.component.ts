import { Component } from '@angular/core';

@Component({
  selector: 'app-manage-servers',
  standalone: false,
  templateUrl: './manage-servers.component.html',
  styleUrl: './manage-servers.component.css',
})
export class ManageServersComponent {
  tabServers = [
    {
      name: 'Production Server',
      type: 'small',
      date_d: new Date(2020, 4, 5),
      status: 'critical',
    },
    {
      name: 'Development Test Server',
      type: 'large',
      date_d: new Date(2021, 2, 6),
      status: 'stable',
    },
    {
      name: 'Development Server',
      type: 'small',
      date_d: new Date(2022, 4, 5),
      status: 'offline',
    },
    {
      name: 'Nidhal Server',
      type: 'medium',
      date_d: new Date(),
      status: 'stable',
    },
  ];

  affecterClass(st) {
    return {
      'list-group-item-success': st == 'stable',
      'list-group-item-danger': st == 'critical',
      'list-group-item-warning': st == 'offline',
    };
  }

  //   class1 = true;
  //   class2 = false;
  //   class3 = false;

  //   switchClass() {
  //     if (this.class1) {
  //       this.class1 = false;
  //       this.class2 = true;
  //     } else if (this.class2) {
  //       this.class2 = false;
  //       this.class3 = true;
  //     } else {
  //       this.class3 = false;
  //       this.class1 = true;
  //     }
  //   }
}
