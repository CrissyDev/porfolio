import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { AwardsAchievementsComponent } from '../awards-achievements/awards-achievements.component';

interface Project {
  title: string;
  description: string;
  tech: string[];
  image?: string;
  link: string;
}

@Component({
  selector: 'app-featured-projects',
  standalone: true,
  imports: [CommonModule, AwardsAchievementsComponent],
  templateUrl: './featured-projects.component.html',
  styleUrls: ['./featured-projects.component.css']
})
export class FeaturedProjectsComponent {

  showAll = false;

  projects: Project[] = [
    {
      title: 'Shopcart E-commerce Platform',
      description: 'A full-featured online store with product listings, cart, and checkout.',
      tech: ['Angular', 'TypeScript', 'DummyJson'],
      link: 'https://shop-cart-6ysa.vercel.app/',
      image: 'assests/pexels-olly-974911.jpg'
    },
    {
      title: 'TakaBest E-commerce Platform',
      description: 'E-commerce platform for people in the Waste Management field.',
      tech: ['Angular', 'MongoDB', 'Gemini'],
      link: 'https://ecommerce-taka-t5ob.vercel.app',
      image: 'assests/pexels-moh-dikko-photography-2151327861-33133680.jpg'
    },
    {
      title: 'ShujaaCare Hospital Management System',
      description: 'Hospital Management System for Cancer Patients.',
      tech: ['Angular', 'Firebase', 'Gemini', 'Python'],
      link: 'https://shujaa-care-wu1q.vercel.app/',
      image: 'assests/doc3.jpg'
    },
    {
      title: 'Eden Link',
      description: 'Smart agricultural farming platform integrating hydroponics monitoring.',
      tech: ['Angular', 'Gemini', 'MongoDB', 'Raspberry Pi'],
      link: 'https://edenlink-iota.vercel.app/',
      image: 'assests/pexels-jatuphon-buraphon-110709-348689.jpg'
    },
    {
      title: 'SeedCheck',
      description: 'Frontend UI for a male reproductive health platform.',
      tech: ['React'],
      link: 'https://seed-check.vercel.app/',
      image: 'assests/seedcheck.jpeg'
    },
    {
      title: 'Quick Score',
      description: 'A credit scoring application.',
      tech: ['NextJS'],
      link: 'https://quick-score.vercel.app/',
      image: 'assests/pexels-tima-miroshnichenko-6694571.jpg'
    },
    {
      title: 'Gbrand Media Agency',
      description: 'Client business website.',
      tech: ['Angular'],
      link: 'https://gbrand-media-agency.vercel.app/',
      image: 'assests/pexels-cottonbro-5082237.jpg'
    }
  ];

  get visibleProjects(): Project[] {
    return this.showAll
      ? this.projects
      : this.projects.slice(0, 3);
  }

  toggleViewAll(): void {
    this.showAll = !this.showAll; 
  }
}
