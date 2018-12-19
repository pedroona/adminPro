import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-incrementador',
  templateUrl: './incrementador.component.html',
  styles: []
})
export class IncrementadorComponent implements OnInit {

  @Input('nombre') leyenda: string = 'Leyenda';
  @Input() progreso: number = 50;

  @Output('actualizaValor') cambioValor: EventEmitter<number>;

  constructor() {
    this.cambioValor = new EventEmitter();
   }

  ngOnInit() {
  }

  incrementar() {
    if ( this.progreso >= 100 ) {
      return;
    }
    this.cambioValor.emit(this.progreso += 5);
  }

  decrementar() {
    if ( this.progreso <= 0 ) {
      return;
    }
    this.cambioValor.emit(this.progreso -= 5);
  }

  onChanges(nuevoValor: number) {
    if ( nuevoValor >= 100) {
      this.progreso = 100;
    } else if ( nuevoValor >= 0 ) {
      this.progreso = 0;
    }
    console.log(this.progreso);
    this.cambioValor.emit(this.progreso);
  }

}
