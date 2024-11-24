import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-wrapper-post',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './wrapper-post.component.html',
  styleUrl: './wrapper-post.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class WrapperPostComponent {
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
