import { Component } from '@angular/core';

@Component({
  selector: 'app-button-ng',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent {
  click(): void {
    console.log('Clicking!');
  }
}
