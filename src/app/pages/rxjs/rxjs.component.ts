import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-rxjs',
  templateUrl: './rxjs.component.html',
  styles: []
})
export class RxjsComponent implements OnInit {

  constructor() {
    const OBS = new Observable<Number> ( observer => {
      let contador = 0;
      const INTERVALO = setInterval( () => {
        contador += 1;
        if ( contador === 3 ) {
          clearInterval(INTERVALO);
          observer.complete();
        }
        if ( contador === 2) {
          observer.error('Socorro!');
        }
        observer.next(contador);
      }, 1000 );
    });
    OBS.subscribe(
      datos => console.log('Subs', datos),
      error => console.error('Error', error),
      () => console.log('El obs terminó')
      );
  }

  ngOnInit() {
  }

}
