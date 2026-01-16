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
      evidence: 'https://x.com/Crissytech/status/1966935890368090270?s=20',
    },
    {
      title: 'Code Her Care Hackathon Winner',
      organization: 'Kenya Tech Events',
      year: '2025',
      description:
        'Recognized for outstanding performance and innovative solutions.',
      evidence: 'https://www.linkedin.com/posts/christal-riziki-470029280_herhealth-activity-7356200500184150016-Ug7E?utm_source=share&utm_medium=member_desktop&rcm=ACoAAERY4VQBLJThphlCJaxinZ7YCIEyso_0v18',
    },
    {
      title: 'GDG Pwani & Code Hackathon Winner',
      organization: 'GDG Pwani',
      year: '2025',
      description:
        '2nd Runners Up after presenting Takabest.',
      evidence: 'https://www.linkedin.com/posts/christal-riziki-470029280_kachiriandcode-iwd2025-gdgpwani-activity-7318426672582615041-aAf0?utm_source=share&utm_medium=member_desktop&rcm=ACoAAERY4VQBLJThphlCJaxinZ7YCIEyso_0v18',
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
