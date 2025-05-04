import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrl: './landing.component.scss'
})
export class LandingComponent implements OnInit {
  isLoading = true;
  loaderMassage = 'Loading members data please wait..'
  ngOnInit() {
    setTimeout(() => {
      this.isLoading = false;
    }, 3000); 
  }
}
