import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ContactComponent } from "../contact/contact.component";

interface Project {
  title: string;
  description: string;
  tech: string[];
  image?: string;
  link: string;
}

@Component({
  selector: 'app-featured-projects',
  standalone:true,
  imports: [CommonModule, ContactComponent],
  templateUrl: './featured-projects.component.html',
  styleUrls: ['./featured-projects.component.css']
})
export class FeaturedProjectsComponent {
  showAll = false;

  projects: Project[] = [
    {
      title: ' Shopcart E-commerce Platform',
      description: 'A full-featured online store with product listings, cart, and checkout.',
      tech: ['Angular', 'TypeScript'],
      link: 'https://your-ecommerce.com',
      image: 'assests/pexels-olly-974911.jpg'
    },
    {
      title: 'TakaBest E commerce Plartform',
      description: 'Ecommerce plartform for people in the Waste Managment field.',
      tech: ['Angular', 'MongoDB', 'Gemini'],
      link: 'https://ecommerce-taka-t5ob.vercel.app',
      image: 'assests/pexels-moh-dikko-photography-2151327861-33133680.jpg'
    },
    {
      title: 'ShujaaCare Hospital Managment System',
      description: 'Hospital Managment System for Cancer Patients.',
      tech: ['Angular', 'Firebase', 'Gemini'],
      link: 'https://your-taskapp.com',
      image: 'assests/doc3.jpg'
    },
    {
      title: 'Portfolio Website',
      description: 'A personal portfolio website to showcase projects and resume.',
      tech: ['Angular', 'SCSS', 'Netlify'],
      link: 'https://your-portfolio.com',
      image: 'https://via.placeholder.com/600x300?text=Portfolio+Website'
    },
    {
      title: 'AI Face Scanner',
      description: 'Detects skin issues using facial AI analysis.',
      tech: ['TensorFlow', 'Python', 'Flask'],
      link: 'https://your-facescanner.com',
      image: 'https://via.placeholder.com/600x300?text=Face+Scanner'
    }
  ];

  get visibleProjects() {
    return this.showAll ? this.projects : this.projects.slice(0, 3);
  }

  toggleViewAll() {
    this.showAll = true;
  }
}
