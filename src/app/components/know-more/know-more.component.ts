import { AfterViewInit, Component, ElementRef, inject } from '@angular/core';
import { DIRECTION, SPEED } from '@app/models/enums';
import { Career, SkillCategory, Stack } from '@app/models/interfaces';
import { CheckPlatformUtility } from '@app/utils/check-platform.utility';

@Component({
  selector: 'app-know-more',
  standalone: true,
  imports: [],
  templateUrl: './know-more.component.html',
  styleUrls: ['./know-more.component.css'],
})
export class KnowMoreComponent implements AfterViewInit {
  private checkPlatform = inject(CheckPlatformUtility);
  private el = inject(ElementRef);

  public skillsCategories: SkillCategory[] = [
    {
      id: 1,
      direction: DIRECTION.RIGHT,
      speed: SPEED.SLOW,
      skills: [
        { skillId: 1, skillName: 'Performance' },
        { skillId: 2, skillName: 'MVP Development' },
        { skillId: 3, skillName: 'Object Oriented Programming' },
        { skillId: 4, skillName: 'Async Programming' },
        { skillId: 5, skillName: 'Data Science' },
        { skillId: 6, skillName: 'Economics' },
        { skillId: 7, skillName: 'Mathematics' },
        { skillId: 8, skillName: 'FullStack Development' },
      ],
    },
    {
      id: 2,
      direction: DIRECTION.LEFT,
      speed: SPEED.SLOW,
      skills: [
        { skillId: 1, skillName: 'Frontend Development' },
        { skillId: 2, skillName: 'SQL Databases' },
        { skillId: 3, skillName: 'Computer Science' },
        { skillId: 4, skillName: 'Hardware Interfacing' },
        { skillId: 5, skillName: 'Data Anonymization' },
        { skillId: 6, skillName: 'Websockets' },
        { skillId: 7, skillName: 'Machine Learning' },
        { skillId: 8, skillName: 'Responsive Design' },
      ],
    },
    {
      id: 3,
      direction: DIRECTION.RIGHT,
      speed: SPEED.MEDIUM,
      skills: [
        { skillId: 1, skillName: 'Backend Development' },
        { skillId: 2, skillName: 'SEO' },
        { skillId: 3, skillName: 'Data Visualization' },
        { skillId: 4, skillName: 'Business Requirements' },
        { skillId: 5, skillName: 'Cloud' },
        { skillId: 6, skillName: 'Design' },
        { skillId: 7, skillName: 'UX/UI' },
        { skillId: 8, skillName: 'SQL Databases' },
      ],
    },
  ];

  public stacks: Stack[] = [
    {
      id: 1,
      show: true,
      image: 'typescript.svg',
      name: 'Javascript / Typescript',
      stackCategory: 'FullStack',
    },
    {
      id: 2,
      show: true,
      image: 'angular.svg',
      name: 'Angular',
      stackCategory: 'Frontend',
    },
    {
      id: 3,
      show: true,
      image: 'java.svg',
      name: 'Java',
      stackCategory: 'Backend',
    },
    {
      id: 4,
      show: true,
      image: 'cloudflare-pages.svg',
      name: 'Cloudflare Pages',
      stackCategory: 'Deployment',
    },
    {
      id: 5,
      show: false,
      image: 'fastapi.svg',
      name: 'FastAPI',
      stackCategory: 'Backend',
    },
    {
      id: 6,
      show: true,
      image: 'jenkins.svg',
      name: 'Jenkins',
      stackCategory: 'CI/CD',
    },
  ];

  public careers: Career[] = [
    {
      id: 1,
      position: 'Junior Developer',
      company: 'NTTData',
      location: 'Alicante',
      time: '2022-2024',
    },
    {
      id: 2,
      position: 'Internship Student',
      company: 'NTTData',
      location: 'Alicante',
      time: '2022-2022',
    },
  ];

  private scrollTimeout: any;

  ngAfterViewInit() {
    if (this.checkPlatform.checkIfBrowser()) {
      const scrollers = document.querySelectorAll('.scroller');

      // If a user hasn't opted in for reduced motion, then we add the animation
      if (!window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
        this.addAnimation(scrollers);
        this.addHoverListeners(scrollers); // Call the function to add listeners
      }

      const scrollableElement =
        this.el.nativeElement.querySelector('.dark-scroll');

      scrollableElement.addEventListener('scroll', this.onScroll.bind(this));
    }
  }

  private onScroll(event: Event) {
    if (this.checkPlatform.checkIfBrowser()) {
      const verticalScroll = event.target as HTMLElement;

      // Add a class that controls the thumb opacity
      verticalScroll.classList.add('scrolling');

      // Reset the timer on each scroll event
      if (this.scrollTimeout) {
        clearTimeout(this.scrollTimeout);
      }

      // Set a new timer to change the color to white and hide the thumb after 300ms
      this.scrollTimeout = setTimeout(() => {
        // Remove the class when scrolling stops
        verticalScroll.classList.remove('scrolling');
      }, 500); // Adjust the time as needed
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
