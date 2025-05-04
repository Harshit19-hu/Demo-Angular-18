import { CUSTOM_ELEMENTS_SCHEMA, NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardRoutingModule } from './dashboard.routing.module';
import { LandingComponent } from './components/landing/landing.component';
import { TeamMembersComponent } from './components/team-members/team-members.component';
import { SecurityRatingChartComponent } from './components/security-rating-chart/security-rating-chart.component';
import { HighchartsChartModule } from 'highcharts-angular';
import { SharedModule } from '../../shared/shared.module';
import { SemiCircularChartComponent } from './components/semi-circular-chart/semi-circular-chart.component';

@NgModule({
  declarations: [
    LandingComponent,
    TeamMembersComponent,
    SecurityRatingChartComponent,
    SemiCircularChartComponent
  ],
  imports: [
    CommonModule,
    HighchartsChartModule,
    DashboardRoutingModule,
    SharedModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA]

})
export class DashboardModule { }
