import { NgOptimizedImage } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from '@app/components/navbar/navbar.component';
import { HeroComponent } from '@app/components/hero/hero.component';
import { KnowMoreComponent } from '@app/components/know-more/know-more.component';
import { TestimonialsComponent } from '@app/components/testimonials/testimonials.component';
import { BlogComponent } from '@app/components/blog/blog.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    NgOptimizedImage,
    NavbarComponent,
    HeroComponent,
    KnowMoreComponent,
    TestimonialsComponent,
    BlogComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'llatzer-portfolio';
}
