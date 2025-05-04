import { Component, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';

@Component({
  selector: 'app-security-rating-chart',
  templateUrl: './security-rating-chart.component.html',
  styleUrl: './security-rating-chart.component.scss'
})
export class SecurityRatingChartComponent implements OnInit {

  Highcharts: typeof Highcharts = Highcharts;
  chartOptions: Highcharts.Options = {
    chart: {
      type: 'column'
    },
    title: {
      text: '' 
    },
    xAxis: {
      categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
    },
    yAxis: {
      min: 0,
      max: 100,
      title: {
        text: 'Security rating'
      },
      stackLabels: {
        enabled: false,
        style: {
          fontWeight: 'bold',
          color: ( 
            Highcharts.defaultOptions.legend?.itemStyle?.color || 'gray'
          )
        }
      }
    },
    legend: {
      enabled: false 
    },
    tooltip: {
      pointFormat: '<span style="color:{series.color}">{series.name}</span>: <b>{point.y}</b> ({point.percentage:.0f}%)<br/>',
      shared: true
    },
    plotOptions: {
      column: {
        stacking: 'normal',
        dataLabels: {
          enabled: false 
        }
      }
    },
    series: [
      {
        type: 'column', 
        name: 'Lower Rating',
        data: [10, 35, 20, 5, 2, 35, 2, 30, 27, 31, 35, 25],
        stack: 'security',
        color:'#ECECF0'
      } as Highcharts.SeriesColumnOptions, 
      {
        type: 'column', 
        name: 'Upper Rating',
        data: [45, 35, 32, 27, 30, 30, 25, 28, 26, 30, 34, 24],
        stack: 'security',
        color:'#9F77ED'

      } as Highcharts.SeriesColumnOptions,
      {
        type: 'column', 
        name: 'Remaining',
        data: [25, 30, 48, 43, 50, 25, 27, 32, 47, 29, 11, 14],
        stack: 'security',
        color:'#6941C7'

      } as Highcharts.SeriesColumnOptions 
    ]
  };

  constructor() { }

  ngOnInit(): void {
  }

 
}
