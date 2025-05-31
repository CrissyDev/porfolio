import { Component } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { HeroComponent } from './hero/hero.component';
import { AboutComponent } from './about/about.component';
import { SkillsComponent } from './skills/skills.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ CommonModule,HeaderComponent, HeroComponent, AboutComponent, SkillsComponent],
  template: `
    <app-header></app-header>
    <app-hero></app-hero>

    <div class="nav-buttons">
      <button (click)="section = 'about'">About Me</button>
      <button (click)="section = 'skills'">Skills</button>
    </div>

    <ng-container [ngSwitch]="section">
      <app-about *ngSwitchCase="'about'"></app-about>
      <app-skills *ngSwitchCase="'skills'"></app-skills>
    </ng-container>
  `,
})
export class AppComponent {
  section: 'about' | 'skills' = 'about';
}
