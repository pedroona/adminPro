import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Ng2-Charts
import { ChartsModule } from 'ng2-charts';

// Componentes
import { GraficaDonutComponent } from '../components/grafica-donut/grafica-donut.component';


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
import { AccountSettingsComponent } from './acount-setings/account-settings.component';

@NgModule({
  declarations: [
    PagesComponent,
    DashboardComponent,
    ProgressComponent,
    Graficas1Component,
    IncrementadorComponent,
    GraficaDonutComponent,
    AccountSettingsComponent
  ],
  imports: [
      CommonModule,
      SharedModule,
      PAGES_ROUTING,
      FormsModule,
      ChartsModule
    ],
  exports: [
      DashboardComponent,
      ProgressComponent,
      Graficas1Component
    ],
  providers: []
})
export class PagesModule {}
