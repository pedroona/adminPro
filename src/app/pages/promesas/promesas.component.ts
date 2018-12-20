import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-promesas',
  templateUrl: './promesas.component.html',
  styles: []
})
export class PromesasComponent implements OnInit {
  constructor() {
    this.contarTres().then(
      mensaje => console.log('Terminó!', mensaje)
    ).catch(
      error => console.log('Ocurrió un error', error)
    );
  }

  ngOnInit() {}

  contarTres(): Promise<boolean> {
    return new Promise((resolve, reject) => {
      let contador = 0;
      const INTERVALO = setInterval(() => {
        contador += 1;
        console.log(contador);
        if (contador === 3) {
          resolve( true );
          clearInterval(INTERVALO);
        }
      }, 1000);
    });
  }
}
