import { NgModule, Injector, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { createCustomElement } from '@angular/elements';

import { ButtonComponent } from './button.component';

@NgModule({
  declarations: [
    ButtonComponent,
  ],
  providers: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  exports: [ButtonComponent]
})
export class ButtonModule {
  constructor(private injector: Injector) {
    const customElement = createCustomElement(ButtonComponent, { injector: this.injector });
    customElements.define('app-button-wc', customElement);
  }
}
