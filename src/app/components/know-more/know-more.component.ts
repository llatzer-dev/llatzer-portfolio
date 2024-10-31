import { AfterViewInit, Component, inject } from '@angular/core';
import { CheckPlatformUtility } from '@app/utils/check-platform.utility';

@Component({
  selector: 'app-know-more',
  standalone: true,
  imports: [],
  templateUrl: './know-more.component.html',
  styleUrls: ['./know-more.component.css'],
})
export class KnowMoreComponent implements AfterViewInit {
  checkPlatform = inject(CheckPlatformUtility);

  ngAfterViewInit() {
    if (this.checkPlatform.checkIfBrowser()) {
      const scrollers = document.querySelectorAll('.scroller');

      // If a user hasn't opted in for reduced motion, then we add the animation
      if (!window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
        this.addAnimation(scrollers);
        this.addHoverListeners(scrollers); // Call the function to add listeners
      }
    }
  }

  addAnimation(scrollers: NodeListOf<Element>) {
    scrollers.forEach((scroller) => {
      // Add data-animated="true" to every `.scroller`
      scroller.setAttribute('data-animated', 'true');

      // Make an array from the elements within `.scroller-inner`
      const scrollerInner = scroller.querySelector('.scroller__inner');
      const scrollerContent = Array.from(scrollerInner?.children || []);

      // For each item in the array, clone it and append it
      scrollerContent.forEach((item) => {
        const duplicatedItem = item.cloneNode(true) as HTMLElement;
        duplicatedItem.setAttribute('aria-hidden', 'true');
        scrollerInner?.appendChild(duplicatedItem);
      });
    });
  }

  // Updated function to handle hover
  addHoverListeners(scrollers: NodeListOf<Element>) {
    scrollers.forEach((scroller) => {
      const listItems = scroller.querySelectorAll('.tag-list li');
      const scrollerInner = scroller.querySelector(
        '.scroller__inner'
      ) as HTMLElement;

      listItems.forEach((item) => {
        item.addEventListener('mouseenter', () => {
          // Change the animation state to paused
          scrollerInner.style.animationPlayState = 'paused';
        });

        item.addEventListener('mouseleave', () => {
          // Reset the animation state
          scrollerInner.style.animationPlayState = 'running';
        });
      });
    });
  }
}
