import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

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
  imports:[CommonModule],
  templateUrl: './featured-projects.component.html',
  styleUrls: ['./featured-projects.component.css']
})
export class FeaturedProjectsComponent {
  showAll = false;

  projects: Project[] = [
    {
      title: 'E-commerce Platform',
      description: 'A full-featured online store with product listings, cart, and checkout.',
      tech: ['Next.js', 'TypeScript', 'Stripe'],
      link: 'https://your-ecommerce.com',
      image: 'https://via.placeholder.com/600x300?text=E-commerce+Platform'
    },
    {
      title: 'Social Media Dashboard',
      description: 'Analytics dashboard for tracking social media performance metrics.',
      tech: ['React', 'D3.js', 'Tailwind CSS'],
      link: 'https://your-dashboard.com',
      image: 'https://via.placeholder.com/600x300?text=Social+Dashboard'
    },
    {
      title: 'Task Management App',
      description: 'Collaborative task management tool with real-time updates.',
      tech: ['React', 'Firebase', 'Material UI'],
      link: 'https://your-taskapp.com',
      image: 'https://via.placeholder.com/600x300?text=Task+Manager'
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
