import { Component, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'app-semi-circular-chart',
  templateUrl: './semi-circular-chart.component.html',
  styleUrl: './semi-circular-chart.component.scss'
})
export class SemiCircularChartComponent implements  OnChanges  {
  @Input() percent = 0;
  @Input() radius = 80;
  @Input() stroke = 10;
  @Input() color = '#6941C7';
  @Input() bgColor = '#ddd';

  public pathLength = 0;
  public progressLength = 0;

  ngOnChanges(): void {
    const r = this.radius;
    const arc = Math.PI * r; 
    this.pathLength = arc;
    this.progressLength = arc * (this.percent / 100);
  }

  get viewBox(): string {
    const size = this.radius * 2 + this.stroke;
    return `0 0 ${size} ${this.radius + this.stroke}`;
  }

  get centerX(): number {
    return this.radius + this.stroke / 2;
  }

  get centerY(): number {
    return this.radius + this.stroke / 2;
  }
}
