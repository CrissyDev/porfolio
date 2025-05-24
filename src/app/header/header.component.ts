import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ThemeService } from '../services/theme.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  themeOptions = ['Light', 'Dark', 'System'];
  showThemeMenu = false;
  currentTheme = 'System';

  constructor(private themeService: ThemeService) {}

  ngOnInit(): void {
    this.currentTheme = this.themeService.getCurrentTheme();
  }

  toggleThemeMenu() {
    this.showThemeMenu = !this.showThemeMenu;
  }

  selectTheme(theme: string) {
    this.themeService.setTheme(theme);
    this.currentTheme = theme;
    this.showThemeMenu = false;
  }

  get currentThemeIcon(): string {
    switch (this.currentTheme.toLowerCase()) {
      case 'light': return 'fa-sun';
      case 'dark': return 'fa-moon';
      default: return 'fa-circle-half-stroke';
    }
  }
}
