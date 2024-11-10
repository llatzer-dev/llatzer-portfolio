import { Injectable } from '@angular/core';
import { Blog } from '@app/models/interfaces';

@Injectable({
  providedIn: 'root',
})
export class BlogService {
  public blogs: Blog[] = [
    {
      id: 1,
      date: '25 Sep 2024',
      name: 'Optimizing state handling in frontend applications',
      resume: 'The use of the Store as Single Source Of Truth',
      tags: ['Frontend', 'Angular', 'NgRx', 'SSOT'],
      link: 'https://www.linkedin.com/pulse/angular-18-ngrx-signalstore-lázaro-ortega-boix-qr8le/',
    },
    {
      id: 2,
      date: '9 Oct 2024',
      name: 'The Future of JavaScript Error Handling',
      resume: 'What is the Safe Assignment Operator (?=)?',
      tags: ['Error Handling', 'ECMAScript', 'JavaScript'],
      link: 'https://www.linkedin.com/pulse/el-futuro-del-manejo-de-errores-en-javascript-qué-es-safe-lázaro-rcobf/',
    },
  ];

  constructor() {}

  getBlogs(): Blog[] {
    return this.blogs;
  }
}
