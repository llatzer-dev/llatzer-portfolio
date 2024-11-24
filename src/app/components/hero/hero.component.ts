import {
  ChangeDetectionStrategy,
  Component,
  computed,
  HostBinding,
  inject,
  input,
} from '@angular/core';
import { RouterLink } from '@angular/router';
import { HighlightBlurDirective } from '@app/directives/highlight-blur.directive';
import { DarkModeService } from '@app/services/darkmode.service';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [RouterLink, HighlightBlurDirective],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeroComponent {
  public darkMode = inject(DarkModeService);

  protected readonly darkMode$ = computed(() => this.darkMode.getDarkMode());

  @HostBinding('class.dark') get mode() {
    return this.darkMode.getDarkMode();
  }

  oldHero = input.required<boolean>();
}
