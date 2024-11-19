import {
  Component,
  computed,
  HostBinding,
  inject,
  Renderer2,
} from '@angular/core';
import { DarkmodeService } from '@app/services/darkmode.service';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css',
})
export class NavbarComponent {
  public darkMode = inject(DarkmodeService);
  private renderer = inject(Renderer2);

  protected readonly darkMode$ = computed(() => this.darkMode.getDarkMode());

  @HostBinding('class.dark') get mode() {
    return this.darkMode.getDarkMode();
  }

  public setDarkMode() {
    this.darkMode.setDarkMode();

    if (this.darkMode.getDarkMode()) {
      this.renderer.setStyle(document.body, 'backgroundColor', '#0E0E0E');
    } else {
      this.renderer.setStyle(document.body, 'backgroundColor', '#fff8e4');
    }

    this.playSound();
  }

  private playSound() {
    const audio = new Audio();
    audio.src = 'sounds/switch.mp3';
    audio.load();
    audio.play();
  }
}
