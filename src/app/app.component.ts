import { Component } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { HeroComponent } from './hero/hero.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HeaderComponent, HeroComponent],
  template: `
    <app-header></app-header>
    <app-hero></app-hero>
  `,
})
export class AppComponent {}
