import { Component, inject, signal, Signal } from '@angular/core';
import { NavbarComponent } from '../../components/navbar/navbar.component';
import { HeroComponent } from '../../components/hero/hero.component';
import { KnowMoreComponent } from '../../components/know-more/know-more.component';
import { TestimonialsComponent } from '../../components/testimonials/testimonials.component';
import { BlogComponent } from '../../components/blog/blog.component';
import { LetstalkComponent } from '../../components/letstalk/letstalk.component';
import { MenuComponent } from '../../components/menu/menu.component';
import { Blog } from '@app/models/interfaces';
import { BlogService } from '@app/services/blog.service';

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
  private blogService = inject(BlogService);

  public oldHero: boolean = false;
  public blogs: Blog[] = [];

  ngOnInit(): void {
    this.blogs = this.blogService.getBlogs();
  }
}
