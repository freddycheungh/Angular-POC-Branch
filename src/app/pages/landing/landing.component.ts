import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class AppLandingComponent {
  title = 'demo';

  constructor(private router: Router) {}

  navigate(): void {
    this.router.navigateByUrl('about');
  }
}
