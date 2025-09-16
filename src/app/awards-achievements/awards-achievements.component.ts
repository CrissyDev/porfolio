import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-awards-achievements',
  imports:[CommonModule],
  templateUrl: './awards-achievements.component.html',
  styleUrls: ['./awards-achievements.component.css'],
})
export class AwardsAchievementsComponent {
  hoverIndex: number = -1;
  selectedAward: any = null;

  awards = [
    {
      title: 'Code Her Care Hackathon Winner',
      organization: 'Kenya Tech Events',
      year: '2025',
      description:
        'Recognized for outstanding performance and innovative solutions in Software development.',
      evidence: '1st Place Position Image',
    },
    {
      title: 'GDG Pwani Kachiri and Code Hackathon Winner',
      organization: 'GDG Pwani',
      year: '2025',
      description:
        'Won a 2nd Runners Up position  after presenting my solution Takabest',
      evidence: 'Picture of AWarding',
    },
    {
      title: ' Roots to Grow Hackathon Winner',
      organization: 'Daobab',
      year: '2024',
      description:
        'Won first place in a 48-hour hackathon with an innovative web application for social good.',
      evidence: 'Hackathon project demo & winner certificate.',
    },
    {
      title: 'Blue Economy Summit Hackathon Winner',
      organization: 'Sotehub',
      year: '2024',
      description:
        'Won the first position with our Project Tidy Safetynet',
      evidence: 'Evidence picture of the Award',
    },
    
    {
      title: 'Tech Community Leader',
      organization: 'DevMeetup',
      year: '2021',
      description:
        'Recognized for organizing monthly developer meetups and fostering community growth.',
      evidence: 'Event highlights and testimonials.',
    },
    {
      title: 'Innovation in AI',
      organization: 'AI Summit',
      year: '2021',
      description:
        'Awarded for developing an AI-based predictive model for sustainable agriculture.',
      evidence: 'Research paper and presentation slides.',
    },
  ];

  openEvidence(award: any) {
    this.selectedAward = award;
  }

  closeEvidence() {
    this.selectedAward = null;
  }
}
