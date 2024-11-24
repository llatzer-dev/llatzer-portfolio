import { BlogService } from '@app/services/blog.service';
import {
  Component,
  computed,
  HostBinding,
  inject,
  Renderer2,
  OnInit,
} from '@angular/core';
import { Blog } from '@app/models/interfaces';
import { DarkmodeService } from '@app/services/darkmode.service';
import { CheckPlatformUtility } from '@app/utils/check-platform.utility';

@Component({
  selector: 'app-blog',
  standalone: true,
  imports: [],
  templateUrl: './blog.component.html',
  styleUrl: './blog.component.css',
})
export class BlogComponent implements OnInit {
  private blogService = inject(BlogService);
  public darkMode = inject(DarkmodeService);
  private renderer = inject(Renderer2);
  private isBrowser = inject(CheckPlatformUtility);

  protected readonly darkMode$ = computed(() => this.darkMode.getDarkMode());

  public blogs: Blog[] = [];

  @HostBinding('class.dark') get mode() {
    return this.darkMode.getDarkMode();
  }

  ngOnInit(): void {
    this.blogs = this.blogService.getBlogs();

    if (this.darkMode.getDarkMode() && this.isBrowser.checkIfBrowser()) {
      this.renderer.setStyle(document.body, 'backgroundColor', '#0E0E0E');
    } else {
      this.renderer.setStyle(document.body, 'backgroundColor', '#fff8e4');
    }
  }
}
