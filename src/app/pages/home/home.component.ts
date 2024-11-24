import {
  Component,
  inject,
  Renderer2,
  OnInit,
  ChangeDetectionStrategy,
} from '@angular/core';
import { NavbarComponent } from '../../components/navbar/navbar.component';
import { HeroComponent } from '../../components/hero/hero.component';
import { KnowMoreComponent } from '../../components/know-more/know-more.component';
import { TestimonialsComponent } from '../../components/testimonials/testimonials.component';
import { BlogComponent } from '../../components/blog/blog.component';
import { LetstalkComponent } from '../../components/letstalk/letstalk.component';
import { MenuComponent } from '../../components/menu/menu.component';
import { Blog } from '@app/models/interfaces';
import { BlogService } from '@app/services/blog.service';
import { DarkModeService } from '@app/services/darkmode.service';
import { CheckPlatformUtility } from '@app/utils/check-platform.utility';

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
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeComponent implements OnInit {
  private blogService = inject(BlogService);
  private darkMode = inject(DarkModeService);
  private renderer = inject(Renderer2);
  private isBrowser = inject(CheckPlatformUtility);

  public oldHero: boolean = false;
  public blogs: Blog[] = this.blogService.getBlogs();

  ngOnInit(): void {
    if (this.darkMode.getDarkMode() && this.isBrowser.checkIfBrowser()) {
      this.renderer.setStyle(document.body, 'backgroundColor', '#0E0E0E');
    } else {
      this.renderer.setStyle(document.body, 'backgroundColor', '#fff8e4');
    }
  }
}
