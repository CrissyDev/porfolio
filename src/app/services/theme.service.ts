import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class ThemeService {
  private current: string = 'System';

  getCurrentTheme(): string {
    return this.current;
  }

  toggleTheme() {
    const isDark = document.body.classList.contains('dark-mode');
    this.setTheme(isDark ? 'Light' : 'Dark');
  }

  setTheme(mode: string) {
    this.current = mode;
    switch (mode.toLowerCase()) {
      case 'light':
        this.applyTheme(false);
        break;
      case 'dark':
        this.applyTheme(true);
        break;
      default:
        this.applyTheme(window.matchMedia('(prefers-color-scheme: dark)').matches);
        break;
    }
  }

  private applyTheme(isDark: boolean): void {
    document.body.classList.toggle('dark-mode', isDark);
  }
}
