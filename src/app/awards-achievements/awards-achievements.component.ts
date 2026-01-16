import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-awards-achievements',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './awards-achievements.component.html',
  styleUrls: ['./awards-achievements.component.css'],
})
export class AwardsAchievementsComponent {

  awards = [
    {
      title: 'Tech Community Leader',
      organization: 'Google',
      year: '2025',
      description:
        'Recognized for organizing monthly developer meetups and fostering community growth.',
      evidence: 'https://example.com/google-community-proof',
    },
    {
      title: 'Code Her Care Hackathon Winner',
      organization: 'Kenya Tech Events',
      year: '2025',
      description:
        'Recognized for outstanding performance and innovative solutions.',
      evidence: 'https://example.com/code-her-care',
    },
    {
      title: 'GDG Pwani & Code Hackathon Winner',
      organization: 'GDG Pwani',
      year: '2025',
      description:
        '2nd Runners Up after presenting Takabest.',
      evidence: 'https://example.com/takabest-award',
    },
    {
      title: 'Roots to Grow Hackathon Winner',
      organization: 'Daobab',
      year: '2024',
      description:
        'First place in a 48-hour hackathon for social good.',
      evidence: 'https://example.com/roots-to-grow',
    },
    {
      title: 'Blue Economy Summit Hackathon Winner',
      organization: 'Sotehub',
      year: '2024',
      description:
        'First position with Project Tidy Safetynet.',
      evidence: 'https://example.com/blue-economy',
    },
    {
      title: 'Mozilla CommonVoice Hackathon',
      organization: 'Swahilipot',
      year: '2023',
      description:
        'AI-based voice model for health systems.',
      evidence: 'https://example.com/commonvoice',
    },
  ];
}
