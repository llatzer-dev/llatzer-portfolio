import { Component, computed, HostBinding, inject } from '@angular/core';
import { Social } from '@app/models/interfaces';
import { DarkmodeService } from '@app/services/darkmode.service';

@Component({
  selector: 'app-letstalk',
  standalone: true,
  imports: [],
  templateUrl: './letstalk.component.html',
  styleUrl: './letstalk.component.css',
})
export class LetstalkComponent {
  public darkMode = inject(DarkmodeService);

  protected readonly darkMode$ = computed(() => this.darkMode.getDarkMode());

  public socials: Social[] = [
    {
      id: 1,
      socialName: 'GitHub',
      socialLink: 'https://github.com/llatzer-dev',
      socialIcon: 'lucide/github-lucide.svg',
      socialIconLight: 'lucide/black/github-lucide.svg',
    },
    {
      id: 2,
      socialName: 'LinkedIn',
      socialLink: 'https://www.linkedin.com/in/lazaro-ortega/',
      socialIcon: 'lucide/linkedin-lucide.svg',
      socialIconLight: 'lucide/black/linkedin-lucide.svg',
    },
    {
      id: 3,
      socialName: 'Email',
      socialLink: 'mailto:lazaro.ortega.boix@gmail.com',
      socialIcon: 'lucide/mail-lucide.svg',
      socialIconLight: 'lucide/black/mail-lucide.svg',
    },
    {
      id: 4,
      socialName: 'Twitter',
      socialLink: 'https://x.com/llatzerdev',
      socialIcon: 'lucide/twitter-lucide.svg',
      socialIconLight: 'lucide/black/twitter-lucide.svg',
    },
  ];

  @HostBinding('class.dark') get mode() {
    return this.darkMode.getDarkMode();
  }
}
