import { Component, inject } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-infos',
  standalone: false,
  templateUrl: './infos.component.html',
  styleUrl: './infos.component.css',
})
export class InfosComponent {
  myId;
  private activatedRoute = inject(ActivatedRoute);

  ngOnInit() {
    //1ere méthode
    // console.log(this.activatedRoute.snapshot.params);
    //this.myId = this.activatedRoute.snapshot.paramMap.get('id');
    //2ème méthode

    this.activatedRoute.paramMap.subscribe({
      next: (data: ParamMap) => {
        this.myId = data.get('id');
      },
      //   error: () => {},
      //   complete : () => {

      //   }
    });
  }
}
