import {
  Component,
  computed,
  HostBinding,
  inject,
  Renderer2,
} from '@angular/core';
import { DarkmodeService } from '@app/services/darkmode.service';
import { CheckPlatformUtility } from '@app/utils/check-platform.utility';

@Component({
  selector: 'app-about-me',
  standalone: true,
  imports: [],
  templateUrl: './about-me.component.html',
  styleUrl: './about-me.component.css',
})
export class AboutMeComponent {
  public darkMode = inject(DarkmodeService);
  private renderer = inject(Renderer2);
  private isBrowser = inject(CheckPlatformUtility);

  protected readonly darkMode$ = computed(() => this.darkMode.getDarkMode());

  @HostBinding('class.dark') get mode() {
    return this.darkMode.getDarkMode();
  }

  ngOnInit(): void {
    if (this.darkMode.getDarkMode() && this.isBrowser.checkIfBrowser()) {
      this.renderer.setStyle(document.body, 'backgroundColor', '#18181b');
    } else {
      this.renderer.setStyle(document.body, 'backgroundColor', '#fff8e4');
    }
  }
}
