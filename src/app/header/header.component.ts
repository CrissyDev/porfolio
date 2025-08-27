import { Component, Output, EventEmitter } from '@angular/core';
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
  currentSection: string = 'home';

  @Output() sectionChange = new EventEmitter<string>();

  constructor(private themeService: ThemeService) {}

  ngOnInit(): void {
    this.currentTheme = this.themeService.getCurrentTheme();
  }

  scrollTo(section: string) {
    this.currentSection = section;
    this.sectionChange.emit(section);
    
    const element = document.getElementById(section);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
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