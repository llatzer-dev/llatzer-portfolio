import { Component, computed, HostBinding, inject, input } from '@angular/core';
import { Blog } from '@app/models/interfaces';
import { DarkmodeService } from '@app/services/darkmode.service';

@Component({
  selector: 'app-blog',
  standalone: true,
  imports: [],
  templateUrl: './blog.component.html',
  styleUrl: './blog.component.css',
})
export class BlogComponent {
  public darkMode = inject(DarkmodeService);

  public blogs = input.required<Blog[]>();

  protected readonly darkMode$ = computed(() => this.darkMode.getDarkMode());

  @HostBinding('class.dark') get mode() {
    return this.darkMode.getDarkMode();
  }
}
