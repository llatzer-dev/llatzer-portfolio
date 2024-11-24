import {
  ChangeDetectionStrategy,
  Component,
  computed,
  HostBinding,
  inject,
} from '@angular/core';
import { BorderHighlightDirective } from '@app/directives/highlight-border.directive';
import { Testimonial } from '@app/models/interfaces';
import { DarkmodeService } from '@app/services/darkmode.service';

@Component({
  selector: 'app-testimonials',
  standalone: true,
  imports: [BorderHighlightDirective],
  templateUrl: './testimonials.component.html',
  styleUrl: './testimonials.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TestimonialsComponent {
  public darkMode = inject(DarkmodeService);

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
      isHighlight: false,
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
      isHighlight: true,
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
      isHighlight: false,
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
      isHighlight: true,
    },
  ];

  protected readonly darkMode$ = computed(() => this.darkMode.getDarkMode());

  @HostBinding('class.dark') get mode() {
    return this.darkMode.getDarkMode();
  }
}
