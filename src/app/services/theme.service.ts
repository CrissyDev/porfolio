import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class ThemeService {
  toggleTheme() {
    throw new Error('Method not implemented.');
  }
  setTheme(mode: string) {
    switch (mode.toLowerCase()) {
      case 'light':
        this.applyTheme(false);
        break;
      case 'dark':
        this.applyTheme(true);
        break;
      case 'system':
      default:
        this.applyTheme(window.matchMedia('(prefers-color-scheme: dark)').matches);
        break;
    }
  }

  private applyTheme(isDark: boolean): void {
    document.body.classList.toggle('dark-mode', isDark);
  }
}
