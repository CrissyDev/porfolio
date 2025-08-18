import { Component } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { HeroComponent } from './hero/hero.component';
import { AboutComponent } from './about/about.component';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ CommonModule,HeaderComponent,HeroComponent, AboutComponent, RouterOutlet],
  template: `
    <app-header></app-header>
     <app-hero></app-hero> 
    <router-outlet></router-outlet> 

    <div class="nav-buttons">
    </div>

    <ng-container [ngSwitch]="section">
      <app-about *ngSwitchCase="'about'"></app-about>
    </ng-container>
  `,
})
export class AppComponent {
  section: 'about' | 'skills' = 'about';
}
