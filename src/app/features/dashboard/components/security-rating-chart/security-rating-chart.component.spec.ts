import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SecurityRatingChartComponent } from './security-rating-chart.component';

describe('SecurityRatingChartComponent', () => {
  let component: SecurityRatingChartComponent;
  let fixture: ComponentFixture<SecurityRatingChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SecurityRatingChartComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SecurityRatingChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
