import {
  Component,
  computed,
  HostBinding,
  inject,
  Renderer2,
  OnInit,
} from '@angular/core';
import { CalculateDurationDirective } from '@app/directives/calculateduration.directive';
import { DarkmodeService } from '@app/services/darkmode.service';
import { CheckPlatformUtility } from '@app/utils/check-platform.utility';

@Component({
  selector: 'app-career',
  standalone: true,
  imports: [CalculateDurationDirective],
  templateUrl: './career.component.html',
  styleUrl: './career.component.css',
})
export class CareerComponent implements OnInit {
  public darkMode = inject(DarkmodeService);
  private renderer = inject(Renderer2);
  private isBrowser = inject(CheckPlatformUtility);

  protected readonly startDateString: string = '2022-11-21';

  public startDate: Date = new Date(this.startDateString);
  public endDate: Date = new Date();

  protected readonly darkMode$ = computed(() => this.darkMode.getDarkMode());

  @HostBinding('class.dark') get mode() {
    return this.darkMode.getDarkMode();
  }

  ngOnInit(): void {
    if (this.darkMode.getDarkMode() && this.isBrowser.checkIfBrowser()) {
      this.renderer.setStyle(document.body, 'backgroundColor', '#0E0E0E');
    } else {
      this.renderer.setStyle(document.body, 'backgroundColor', '#fff8e4');
    }
  }
}
