import { AfterViewInit, Component, inject } from '@angular/core';
import { CheckPlatformUtility } from '@app/utils/check-platform.utility';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css',
})
export class MenuComponent implements AfterViewInit {
  private checkPlatform = inject(CheckPlatformUtility);

  ngAfterViewInit() {
    if (this.checkPlatform.checkIfBrowser()) {
      window.addEventListener('scroll', this.showMenu);
    }
  }

  showMenu() {
    const menu = document.querySelectorAll('.floating-bar-wrapper');
    const scrollTop = document.documentElement.scrollTop;
    menu.forEach((item) => {
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
