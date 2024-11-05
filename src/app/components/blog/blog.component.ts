import { Component } from '@angular/core';
import { Blog } from '@app/models/interfaces';

@Component({
  selector: 'app-blog',
  standalone: true,
  imports: [],
  templateUrl: './blog.component.html',
  styleUrl: './blog.component.css',
})
export class BlogComponent {
  public blogs: Blog[] = [
    {
      id: 1,
      name: 'Production-Ready Deployments to VPS',
      resume: 'How to set up a VPS for deploying applications in production.',
      tags: ['VPS', 'Docker', 'Github Actions', 'CI/CD'],
      link: 'link',
    },
    {
      id: 2,
      name: 'OpenGraph images with Astro and i18n',
      resume:
        'We configure OpenGraph images in Astro to adapt to the different languages of our website.',
      tags: ['Astro', 'og-images', 'i18n'],
      link: 'link',
    },
    {
      id: 3,
      name: 'Deploy Docker containers in VPS with GitHub Actions',
      resume:
        'How to make a CI/CD pipeline to deploy Docker containers in a VPS with GitHub Actions',
      tags: ['VPS', 'Docker', 'GitHub Actions', 'CI/CD'],
      link: 'link',
    },
    {
      id: 4,
      name: 'You shouldn´t use Create React App',
      resume:
        'This is a post I made about why you should not use Create React App a couple of years ago. I still stand by this post today.',
      tags: ['React', 'create-react-app'],
      link: 'link',
    },
  ];
}
