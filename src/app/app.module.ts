import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { AppAboutComponent } from './pages/about/about.component';
import { AppLandingComponent } from './pages/landing/landing.component';

import { ButtonModule } from './components/button/button.module';

@NgModule({
  declarations: [
    AppComponent,
    AppAboutComponent,
    AppLandingComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
