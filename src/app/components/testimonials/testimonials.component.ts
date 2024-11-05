import { Component } from '@angular/core';
import { Testimonial } from '@app/models/interfaces';

@Component({
  selector: 'app-testimonials',
  standalone: true,
  imports: [],
  templateUrl: './testimonials.component.html',
  styleUrl: './testimonials.component.css',
})
export class TestimonialsComponent {
  public testimonials: Testimonial[] = [
    {
      id: 1,
      companyName: 'NTTData',
      companyIcon: 'nttdata.webp',
      companyBackground: '#070e27',
      testimonialName: 'Sergio Manuel',
      testimonialPosition: 'Service Leader',
      testimonialFile: 'recommendation-letter.pdf',
      testimonialText:
        'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Explicabo porro, quod, quibusdam voluptatem nisi ut libero nemo aliquam laboriosam consequatur saepe debitis consectetur molestias. Obcaecati maxime mollitia esse libero consequuntur.',
    },
    {
      id: 2,
      companyName: 'Zurich',
      companyIcon: 'zurich.svg',
      companyBackground: '#fff',
      testimonialName: 'Xavier Blade',
      testimonialPosition: 'Application Expert',
      testimonialFile: 'recommendation-letter.pdf',
      testimonialText:
        'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Explicabo porro, quod, quibusdam voluptatem nisi ut libero nemo aliquam laboriosam consequatur saepe debitis consectetur molestias. Obcaecati maxime mollitia esse libero consequuntur.',
    },
  ];

  public testimonialsMockUp: Testimonial[] = [
    {
      id: 1,
      companyName: 'NTTData',
      companyIcon: 'nttdata.webp',
      companyBackground: '#070e27',
      testimonialName: 'Name Surname',
      testimonialPosition: 'Position',
      testimonialFile: 'recommendation-letter.pdf',
      testimonialText:
        'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Explicabo porro, quod, quibusdam voluptatem nisi ut libero nemo aliquam laboriosam consequatur saepe debitis consectetur molestias. Obcaecati maxime mollitia esse libero consequuntur.',
    },
    {
      id: 2,
      companyName: 'Zurich',
      companyIcon: 'zurich.svg',
      companyBackground: '#fff',
      testimonialName: 'Name Surname',
      testimonialPosition: 'Position',
      testimonialFile: 'recommendation-letter.pdf',
      testimonialText:
        'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Explicabo porro, quod, quibusdam voluptatem nisi ut libero nemo aliquam laboriosam consequatur saepe debitis consectetur molestias. Obcaecati maxime mollitia esse libero consequuntur.',
    },
  ];
}
