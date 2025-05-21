import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  readonly darkMode = signal(false);

  toggleTheme() {
    this.darkMode.update(mode => !mode);
  }
}