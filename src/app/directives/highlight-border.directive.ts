import {
  Directive,
  ElementRef,
  inject,
  input,
  InputSignal,
  OnInit,
  Renderer2,
} from '@angular/core';

@Directive({
  selector: '[appBorderHighlight]',
  standalone: true,
})
export class BorderHighlightDirective implements OnInit {
  private el = inject(ElementRef);
  private renderer = inject(Renderer2);

  public isHighlight: InputSignal<boolean> = input<boolean>(false);

  private setBorderColor(color: string): void {
    this.renderer.setStyle(
      this.el.nativeElement,
      'border',
      `2px solid ${color}`
    );
  }

  ngOnInit(): void {
    if (this.isHighlight() === true) this.setBorderColor('#FFBE28');
  }
}
