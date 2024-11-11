import {
  Directive,
  ElementRef,
  input,
  Input,
  OnChanges,
  Renderer2,
  SimpleChanges,
} from '@angular/core';

@Directive({
  standalone: true,
  selector: '[appCalculateDuration]',
})
export class CalculateDurationDirective implements OnChanges {
  public startDate = input.required<Date>();
  public endDate = input.required<Date>();

  constructor(private el: ElementRef, private renderer: Renderer2) {}

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['startDate'] || changes['endDate']) {
      this.calculateDuration();
    }
  }

  private calculateDuration(): void {
    const start = this.startDate();
    const end = this.endDate();
    const totalMonths =
      (end.getFullYear() - start.getFullYear()) * 12 +
      end.getMonth() -
      start.getMonth();

    const years = Math.floor(totalMonths / 12);
    const months = totalMonths % 12;

    let duration = '';
    if (years > 0) {
      duration += `${years} year${years > 1 ? 's' : ''} `;
    }
    if (months > 0) {
      duration += `${months} month${months > 1 ? 's' : ''}`;
    }

    const existingText = this.el.nativeElement.textContent.trim();
    const newText = `${existingText} ${duration.trim()}`.trim();

    this.renderer.setProperty(this.el.nativeElement, 'textContent', newText);
  }
}
