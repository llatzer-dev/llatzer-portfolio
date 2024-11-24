import {
  Component,
  computed,
  HostBinding,
  inject,
  Renderer2,
  OnInit,
  ChangeDetectionStrategy,
} from '@angular/core';
import { DarkmodeService } from '@app/services/darkmode.service';
import { CheckPlatformUtility } from '@app/utils/check-platform.utility';

@Component({
  selector: 'app-about-me',
  standalone: true,
  imports: [],
  templateUrl: './about-me.component.html',
  styleUrl: './about-me.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AboutMeComponent implements OnInit {
  public darkMode = inject(DarkmodeService);
  private renderer = inject(Renderer2);
  private isBrowser = inject(CheckPlatformUtility);

  protected readonly darkMode$ = computed(() => this.darkMode.getDarkMode());

  @HostBinding('class.dark') get mode() {
    return this.darkMode.getDarkMode();
  }

  ngOnInit(): void {
    if (this.darkMode.getDarkMode() && this.isBrowser.checkIfBrowser()) {
      this.renderer.setStyle(document.body, 'backgroundColor', '#0E0E0E');
    } else {
      this.renderer.setStyle(document.body, 'backgroundColor', '#fff8e4');
    }
  }
}
