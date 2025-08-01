import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FeaturedProjectsComponent } from "../featured-projects/featured-projects.component";

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule, FeaturedProjectsComponent],
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css'],
})
export class AboutComponent {
  activeTab: string = 'skills';

  experiences = [
    {
      title: 'Frontend Developer',
      company: 'Phonix Dimas.',
      duration: 'May 2025-July 2025',
      description: `3 Month Attachment, building Software Using Angular, Use of API's`
    },
    {
      title: 'Master Trainer',
      company: 'Sote HUB',
      duration: 'Dec 2024-July 2025',
      description: `Trained Msmes on how to Scale their Businesses online and bring profits, buld Websites
      using plartforms like Odoo, WordPress`
    }
  ];

  educations = [
    {
      degree: 'Bachelor of Science in Information Technology',
      institution: 'Technical University of Mombasa',
      duration: '2022 - Present',
      description: `Focused on software development, algorithms, and web technologies. Graduated with honors and built several academic projects.`
    },
    {
      degree: 'Kenya Certificate of Secondary Education (KCSE)',
      institution: 'Mudavadi Girls High School',
      duration: '2014 - 2018',
      description: `Completed secondary education with a strong emphasis on sciences and mathematics.`
    }
  ];

  setActiveTab(tab: string): void {
    this.activeTab = tab;
  }
}
