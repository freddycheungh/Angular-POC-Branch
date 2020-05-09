import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'demo';

  toggleButton() {
    const button = document.getElementById('hello');
    button.innerHTML = '<app-button></app-button>';
  }
  addButton() {
    const button = document.getElementById('hello');
    button.innerHTML = '<app-button-wc></app-button-wc>';
  }
}
