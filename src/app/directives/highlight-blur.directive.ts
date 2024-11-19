import { Directive, ElementRef, inject, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appHighlightBlur]',
  standalone: true,
})
export class HighlightBlurDirective {
  constructor(private el: ElementRef, private renderer: Renderer2) {}

  ngOnInit(): void {
    const blurDiv = this.renderer.createElement('div');
    this.renderer.addClass(blurDiv, 'absolute');
    this.renderer.addClass(blurDiv, 'inset-0');
    this.renderer.addClass(blurDiv, 'bg-bungee-shade');
    this.renderer.addClass(blurDiv, 'blur-xl');
    this.renderer.addClass(blurDiv, 'opacity-10');

    this.renderer.appendChild(this.el.nativeElement, blurDiv);
  }
}
