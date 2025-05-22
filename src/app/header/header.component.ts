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

  constructor(private themeService: ThemeService) {}

  toggleThemeMenu() {
    this.showThemeMenu = !this.showThemeMenu;
  }

  selectTheme(theme: string) {
    this.themeService.setTheme(theme);
    this.showThemeMenu = false;
  }
}
