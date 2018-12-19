import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-progress',
  templateUrl: './progress.component.html',
  styles: []
})
export class ProgressComponent implements OnInit {

  progreso: number = 50;

  constructor() { }

  ngOnInit() {
  }

  incrementar() {
    if ( this.progreso >= 100 ) {
      return;
    }
    this.progreso += 5;
  }

  decrementar() {
    if ( this.progreso <= 0 ) {
      return;
    }
    this.progreso -= 5;
  }

}
