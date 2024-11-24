import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  computed,
  HostBinding,
  inject,
  input,
} from '@angular/core';
import { Blog } from '@app/models/interfaces';
import { DarkmodeService } from '@app/services/darkmode.service';
import { WrapperPostComponent } from '../wrapper-post/wrapper-post.component';

@Component({
  selector: 'app-blog',
  standalone: true,
  imports: [CommonModule, WrapperPostComponent],
  templateUrl: './blog.component.html',
  styleUrl: './blog.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BlogComponent {
  public darkMode = inject(DarkmodeService);

  public blogs = input.required<Blog[]>();

  protected readonly darkMode$ = computed(() => this.darkMode.getDarkMode());

  @HostBinding('class.dark') get mode() {
    return this.darkMode.getDarkMode();
  }

  project = {
    title: 'Sample Project',
    description:
      'This is a sample project description to demonstrate how to use the component.',
    icon: 'https://via.placeholder.com/24',
    url: 'https://example.com',
    githubUrl: 'https://github.com/example/repository',
    mainTech: {
      svelteIcon: 'https://via.placeholder.com/24',
      url: 'https://technology.com',
      title: 'Svelte',
    },
    tags: ['Angular', 'TypeScript', 'Web'],
    latest: true,
    updated: false,
  };

  focused = false;
  position = { x: 0, y: 0 };
  opacity = 0;

  onMouseMove(event: MouseEvent) {
    if (this.focused) return;
    const rect = (event.target as HTMLElement).getBoundingClientRect();
    this.position = {
      x: event.clientX - rect.left,
      y: event.clientY - rect.top,
    };
  }

  handleFocus() {
    this.focused = true;
    this.opacity = 1;
  }

  handleBlur() {
    this.focused = false;
    this.opacity = 0;
  }

  handleMouseEnter() {
    this.opacity = 1;
  }

  handleMouseLeave() {
    this.opacity = 0;
  }
}
