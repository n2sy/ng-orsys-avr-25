import { Component } from '@angular/core';
import { Observable, Observer, Subscription } from 'rxjs';

@Component({
  selector: 'app-exp-obs',
  standalone: false,
  templateUrl: './exp-obs.component.html',
  styleUrl: './exp-obs.component.css',
})
export class ExpObsComponent {
  myObs$: Observable<number>;
  suscriptionNumber: Subscription;

  ngOnInit() {
    // this.myObs$ = new Observable((observer: Observer<string>) => {
    //   setTimeout(() => {
    //     observer.next('first package');
    //   }, 2000);
    //   setTimeout(() => {
    //     observer.next('second package');
    //   }, 4000);
    //   setTimeout(() => {
    //     observer.error(new Error('Timeout...'));
    //   }, 6000);
    //   //   setTimeout(() => {
    //   //     observer.next('third package');
    //   //   }, 8000);
    //   setTimeout(() => {
    //     observer.complete();
    //   }, 8000);
    // });
    // this.myObs$.subscribe({
    //   next: (valeur) => {
    //     console.log(valeur);
    //   },
    //   error: (err) => {
    //     console.log('Erreur détectée', err);
    //   },
    //   complete: () => {
    //     console.log('Flux fermée');
    //   },
    // });
    this.myObs$ = new Observable((observer: Observer<number>) => {
      let count = 0;
      setInterval(() => {
        count++;
        // if (count == 5) observer.complete();
        observer.next(count);
      }, 1000);
    });

    this.suscriptionNumber = this.myObs$.subscribe({
      next: (valeur) => {
        console.log(valeur);
      },
      error: (err) => {
        console.log('Erreur détectée', err);
      },
      complete: () => {
        console.log('Flux fermée');
      },
    });
  }

  ngOnDestroy() {
    this.suscriptionNumber.unsubscribe();
  }
}
