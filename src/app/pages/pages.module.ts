import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesComponent } from './pages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProgressComponent } from './progress/progress.component';
import { Graficas1Component } from './graficas1/graficas1.component';

import { FormsModule } from '@angular/forms';


// Módulos
import { SharedModule } from '../shared/shared.module';

// Rutas
import { PAGES_ROUTING } from './pages.routes';

// Temporal
import { IncrementadorComponent } from '../components/incrementador/incrementador.component';

@NgModule({
  declarations: [
    PagesComponent,
    DashboardComponent,
    ProgressComponent,
    Graficas1Component,
    IncrementadorComponent
  ],
  imports: [
      CommonModule,
      SharedModule,
      PAGES_ROUTING,
      FormsModule
    ],
  exports: [
      DashboardComponent,
      ProgressComponent,
      Graficas1Component
    ],
  providers: []
})
export class PagesModule {}
