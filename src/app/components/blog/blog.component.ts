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
      name: 'Optimizing state handling in frontend applications',
      resume: 'The use of the Store as Single Source Of Truth',
      tags: ['Frontend', 'Angular', 'NgRx', 'SSOT'],
      link: 'https://www.linkedin.com/pulse/angular-18-ngrx-signalstore-lázaro-ortega-boix-qr8le/',
    },
    {
      id: 2,
      name: 'The Future of JavaScript Error Handling',
      resume: 'What is the Safe Assignment Operator (?=)?',
      tags: ['Error Catching', 'ECMAScript', 'JavaScript'],
      link: 'https://www.linkedin.com/pulse/el-futuro-del-manejo-de-errores-en-javascript-qué-es-safe-lázaro-rcobf/',
    },
  ];
}
