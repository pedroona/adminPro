import { Component, OnInit, Inject } from '@angular/core';
import { SettingsService } from 'src/app/services/services.index';

@Component({
  selector: 'app-account-settings',
  templateUrl: './account-settings.component.html',
  styles: ['#themecolors a { cursor: pointer}']
})
export class AccountSettingsComponent implements OnInit {

  constructor( private _as: SettingsService ) { }

  ngOnInit() {
    this.colocarCheck();
  }

  cambiarColor( tema: string, link: any) {
    this.aplicarCheck(link);
    this._as.aplicarTema( tema );
  }

  aplicarCheck(link: any) {
    const SELECTORES: any = document.getElementsByClassName('selector');
    for ( const ref of SELECTORES) {
      ref.classList.remove('working');
    }
    link.classList.add('working');
  }

  colocarCheck () {
    const SELECTORES: any = document.getElementsByClassName('selector');
    const TEMA = this._as.ajustes.tema;
    for ( const ref of SELECTORES) {
      ref.classList.remove('working');
      if ( ref.getAttribute('data-theme') === TEMA ) {
        ref.classList.add('working');
      }
    }
  }

}
