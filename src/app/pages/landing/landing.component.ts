import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class AppLandingComponent implements OnInit {
  title = 'demo';

  constructor(private router: Router) {}

  ngOnInit(): void {
    window.location.replace('/about');
  }

  navigate(): void {
    this.router.navigateByUrl('about');
  }
}
