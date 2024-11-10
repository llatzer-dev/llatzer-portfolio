import { Component, computed, HostBinding, inject, input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { DarkmodeService } from '@app/services/darkmode.service';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css',
})
export class HeroComponent {
  public darkMode = inject(DarkmodeService);

  protected readonly darkMode$ = computed(() => this.darkMode.getDarkMode());

  @HostBinding('class.dark') get mode() {
    return this.darkMode.getDarkMode();
  }

  oldHero = input.required<Boolean>();
}
