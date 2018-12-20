import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-grafica-donut',
  templateUrl: './grafica-donut.component.html',
  styles: []
})
export class GraficaDonutComponent {

  // Doughnut
  @Input('labels') public doughnutChartLabels: string[];
  @Input('data') public doughnutChartData: number[];
  @Input('chartType') public doughnutChartType: string;

  constructor() { }

}
