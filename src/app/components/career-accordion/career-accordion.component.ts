import {
  ChangeDetectionStrategy,
  Component,
  computed,
  HostBinding,
  inject,
  input,
  InputSignal,
} from '@angular/core';
import { Career } from '@app/models/interfaces';
import { DarkmodeService } from '@app/services/darkmode.service';

@Component({
  selector: 'app-career-accordion',
  standalone: true,
  imports: [],
  templateUrl: './career-accordion.component.html',
  styleUrl: './career-accordion.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CareerAccordionComponent {
  public darkMode = inject(DarkmodeService);

  readonly careers: InputSignal<Career[]> = input<Career[]>([]);
  protected readonly darkMode$ = computed(() => this.darkMode.getDarkMode());

  activeIndex: number | null = null;

  @HostBinding('class.dark') get mode() {
    return this.darkMode.getDarkMode();
  }

  toggleAccordion(index: number): void {
    if (this.activeIndex === index) {
      this.activeIndex = null; // Cierra el acordeón si ya está abierto
    } else {
      // Cierra el acordeón actual primero
      this.activeIndex = null;
      setTimeout(() => {
        this.activeIndex = index; // Abre el nuevo acordeón después de un breve retraso
      }, 300); // Alineado con la duración de la transición CSS
    }
  }
}
