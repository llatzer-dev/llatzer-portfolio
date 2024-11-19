import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-wrapper-post',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './wrapper-post.component.html',
  styleUrl: './wrapper-post.component.css',
})
export class WrapperPostComponent {
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
  // Mock data for testing

  onMouseMove(event: MouseEvent) {
    if (this.focused) return;
    const rect = (event.target as HTMLElement).getBoundingClientRect();
    this.position = {
      x: event.clientX - rect.left,
      y: event.clientY - rect.top,
    };

    console.log('onMouseMove');
  }

  handleFocus() {
    this.focused = true;
    this.opacity = 1;
    console.log('handleFocus');
  }

  handleBlur() {
    this.focused = false;
    this.opacity = 0;
    console.log('handleBlur');
  }

  handleMouseEnter() {
    this.opacity = 1;
    console.log('handleMouseEnter');
  }

  handleMouseLeave() {
    this.opacity = 0;
    console.log('handleMouseLeave');
  }
}
