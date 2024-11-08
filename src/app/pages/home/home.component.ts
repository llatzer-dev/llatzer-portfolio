import { Component } from '@angular/core';
import { NavbarComponent } from '../../components/navbar/navbar.component';
import { HeroComponent } from '../../components/hero/hero.component';
import { KnowMoreComponent } from '../../components/know-more/know-more.component';
import { TestimonialsComponent } from '../../components/testimonials/testimonials.component';
import { BlogComponent } from '../../components/blog/blog.component';
import { LetstalkComponent } from '../../components/letstalk/letstalk.component';
import { MenuComponent } from '../../components/menu/menu.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    NavbarComponent,
    HeroComponent,
    KnowMoreComponent,
    TestimonialsComponent,
    BlogComponent,
    LetstalkComponent,
    MenuComponent,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  public oldHero: boolean = false;
}
