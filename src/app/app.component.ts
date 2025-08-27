import { Component } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { HeroComponent } from './hero/hero.component';
import { AboutComponent } from './about/about.component';
import { FeaturedProjectsComponent } from './featured-projects/featured-projects.component';
import { ContactComponent } from './contact/contact.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    HeaderComponent,
    HeroComponent,
    AboutComponent,
    FeaturedProjectsComponent,
    ContactComponent
  ],
  template: `
    <app-header (sectionChange)="onSectionChange($event)"></app-header>
    
    <!-- Home/Hero Section -->
    <section id="home">
      <app-hero></app-hero>
    </section>
    
    <!-- About Section -->
    <section id="about">
      <app-about></app-about>
    </section>
    
    <!-- Projects Section -->
    <section id="projects">
      <app-featured-projects></app-featured-projects>
    </section>
    
    <!-- Contact Section -->
    <section id="contact">
      <app-contact></app-contact>
    </section>
  `,

})
export class AppComponent {
  title(title: any) {
    throw new Error('Method not implemented.');
  }
  currentSection: string = 'home';

  onSectionChange(section: string) {
    this.currentSection = section;
  
  }
}