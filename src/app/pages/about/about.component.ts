import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
})
export class AppAboutComponent implements OnInit {
  ngOnInit(): void {
    window.location.replace('/');
  }
}
