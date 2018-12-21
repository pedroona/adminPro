import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable, Subscription  } from 'rxjs';
import { retry, map, filter  } from 'rxjs/operators';

@Component({
  selector: 'app-rxjs',
  templateUrl: './rxjs.component.html',
  styles: []
})
export class RxjsComponent implements OnInit, OnDestroy {

  suscripcion: Subscription;

  constructor() {
    this.suscripcion = this.regresaObservable().subscribe(
      datos => console.log('Subs', datos),
      error => console.error('Error', error),
      () => console.log('El obs terminó')
    );
  }

  ngOnInit() {}

  ngOnDestroy() {
    this.suscripcion.unsubscribe();
  }

  regresaObservable (): Observable<any> {
    return new Observable<any>(observer => {
      let contador = 0;
      const INTERVALO = setInterval(() => {
        contador += 1;
        const SALIDA = {
          valor: contador
        };
        observer.next(SALIDA);
        // if (contador === 3) {
        //   clearInterval(INTERVALO);
        //   observer.complete();
        // }
        // if (contador === 2) {
        //   // clearInterval(INTERVALO);
        //   observer.error('Socorro!');
        // }
      }, 1000);
    }).pipe(
      map( respuesta => respuesta.valor ),
      filter( ( valor, index) => {
        if ( ( valor % 2 ) === 0 ) {
          return true;
        }
        return false;
      }));
  }

  detenerObs() {
  }

}
