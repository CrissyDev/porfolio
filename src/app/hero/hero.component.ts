import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ThemeService } from '../services/theme.service';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent {
  fullName = 'Christal Riziki';
  typedName = '';
  index = 0;

  constructor(private themeService: ThemeService) {}

  ngOnInit(): void {
    this.type();
  }

  type() {
    if (this.index < this.fullName.length) {
      this.typedName += this.fullName.charAt(this.index);
      this.index++;
      setTimeout(() => this.type(), 120);
    }
  }
}
