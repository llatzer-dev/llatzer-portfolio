import { Component } from '@angular/core';
import { Social } from '@app/models/interfaces';

@Component({
  selector: 'app-letstalk',
  standalone: true,
  imports: [],
  templateUrl: './letstalk.component.html',
  styleUrl: './letstalk.component.css',
})
export class LetstalkComponent {
  public socials: Social[] = [
    {
      id: 1,
      socialName: 'GitHub',
      socialLink: 'https://github.com/llatzer-dev',
      socialIcon: 'lucide/github-lucide.svg',
    },
    {
      id: 2,
      socialName: 'LinkedIn',
      socialLink: 'https://www.linkedin.com/in/lazaro-ortega/',
      socialIcon: 'lucide/linkedin-lucide.svg',
    },
    {
      id: 3,
      socialName: 'Email',
      socialLink: 'mailto:lazaro.ortega.boix@gmail.com',
      socialIcon: 'lucide/mail-lucide.svg',
    },
    {
      id: 4,
      socialName: 'Twitter',
      socialLink: 'https://x.com/llatzerdev',
      socialIcon: 'lucide/twitter-lucide.svg',
    },
  ];
}
