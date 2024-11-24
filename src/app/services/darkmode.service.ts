import { effect, inject, Injectable, signal } from '@angular/core';
import { CheckPlatformUtility } from '@app/utils/check-platform.utility';

@Injectable({
  providedIn: 'root',
})
export class DarkModeService {
  private checkPlatform = inject(CheckPlatformUtility);

  private readonly DARKMODE: string = 'darkMode';
  private readonly FALSE: string = 'false';
  private readonly TRUE: string = 'true';

  private darkMode = signal<boolean>(
    JSON.parse(window.localStorage.getItem(this.DARKMODE) ?? this.TRUE)
  );

  constructor() {
    effect(() => {
      if (this.checkPlatform.checkIfBrowser()) {
        window.localStorage.setItem(
          this.DARKMODE,
          JSON.stringify(this.darkMode())
        );
      }
    });
  }

  public setDarkMode() {
    this.darkMode.set(!this.darkMode());
  }

  public getDarkMode() {
    return this.darkMode();
  }
}
