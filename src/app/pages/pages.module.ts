import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesComponent } from './pages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProgressComponent } from './progress/progress.component';
import { Graficas1Component } from './graficas1/graficas1.component';

// Módulos
import { SharedModule } from '../shared/shared.module';
import { PAGES_ROUTING } from './pages.routes';

@NgModule({
  declarations: [
    PagesComponent,
    DashboardComponent,
    ProgressComponent,
    Graficas1Component
  ],
  imports: [
      CommonModule,
      SharedModule,
      PAGES_ROUTING
    ],
  exports: [
      DashboardComponent,
      ProgressComponent,
      Graficas1Component
    ],
  providers: []
})
export class PagesModule {}
