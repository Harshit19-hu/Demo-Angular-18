import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SemiCircularChartComponent } from './semi-circular-chart.component';

describe('SemiCircularChartComponent', () => {
  let component: SemiCircularChartComponent;
  let fixture: ComponentFixture<SemiCircularChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SemiCircularChartComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SemiCircularChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
