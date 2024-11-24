import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  computed,
  HostBinding,
  inject,
} from '@angular/core';
import { DarkModeService } from '@app/services/darkmode.service';
import { CheckPlatformUtility } from '@app/utils/check-platform.utility';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MenuComponent implements AfterViewInit {
  private checkPlatform = inject(CheckPlatformUtility);
  public darkMode = inject(DarkModeService);

  protected readonly darkMode$ = computed(() => this.darkMode.getDarkMode());

  @HostBinding('class.dark') get mode() {
    return this.darkMode.getDarkMode();
  }

  ngAfterViewInit() {
    if (this.checkPlatform.checkIfBrowser()) {
      window.addEventListener('scroll', this.showMenu);
    }
  }

  showMenu() {
    const menu = document.querySelectorAll('.floating-bar-wrapper');
    const scrollTop = document.documentElement.scrollTop;
    menu.forEach(item => {
      const { classList: className } = item as HTMLElement;
      if (scrollTop >= 200) {
        className.remove('novisible');
        className.add('visible');
      } else {
        if (className.contains('visible')) {
          className.remove('visible');
          className.add('novisible');
        }
      }
    });
  }
}
