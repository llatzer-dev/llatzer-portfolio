import {
  AfterViewInit,
  Component,
  computed,
  ElementRef,
  HostBinding,
  inject,
} from '@angular/core';
import { RouterLink } from '@angular/router';
import { DIRECTION, SPEED } from '@app/models/enums';
import { Career, SkillCategory, Stack } from '@app/models/interfaces';
import { DarkmodeService } from '@app/services/darkmode.service';
import { CheckPlatformUtility } from '@app/utils/check-platform.utility';
import { CareerAccordionComponent } from '../career-accordion/career-accordion.component';

@Component({
  selector: 'app-know-more',
  standalone: true,
  imports: [RouterLink, CareerAccordionComponent],
  templateUrl: './know-more.component.html',
  styleUrls: ['./know-more.component.css'],
})
export class KnowMoreComponent implements AfterViewInit {
  private checkPlatform = inject(CheckPlatformUtility);
  private el = inject(ElementRef);
  public darkMode = inject(DarkmodeService);

  public skillsCategories: SkillCategory[] = [
    {
      id: 1,
      direction: DIRECTION.RIGHT,
      speed: SPEED.SLOW,
      skills: [
        { skillId: 1, skillName: 'FullStack Development' },
        { skillId: 2, skillName: 'Software Architecture' },
        { skillId: 3, skillName: 'Team Collaboration' },
        { skillId: 4, skillName: 'Communication Skills' },
        { skillId: 5, skillName: 'Knowledge Transfer' },
        { skillId: 6, skillName: 'Jenkins' },
        { skillId: 7, skillName: 'MVP Development' },
      ],
    },
    {
      id: 2,
      direction: DIRECTION.LEFT,
      speed: SPEED.SLOW,
      skills: [
        { skillId: 1, skillName: 'Backend Development' },
        { skillId: 2, skillName: 'Java' },
        { skillId: 3, skillName: 'Microservices' },
        { skillId: 4, skillName: 'Object Oriented Programming' },
        { skillId: 5, skillName: 'Spring Boot' },
        { skillId: 6, skillName: 'Ant & XML' },
        { skillId: 7, skillName: 'SQL Database' },
      ],
    },
    {
      id: 3,
      direction: DIRECTION.RIGHT,
      speed: SPEED.MEDIUM,
      skills: [
        { skillId: 1, skillName: 'Frontend Development' },
        { skillId: 2, skillName: 'Angular' },
        { skillId: 3, skillName: 'UI/UX Design' },
        { skillId: 4, skillName: 'Code Refactoring' },
        { skillId: 5, skillName: 'Feature Development' },
        { skillId: 6, skillName: 'Responsive Design' },
        { skillId: 7, skillName: 'Data Visualization' },
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
      time: '2022-Present',
      details: [
        'Part of the Architecture Maintenance team for Zurich, focusing on software architecture and environment maintenance.',
        'Maintained microservices and backend SOAP WebServices in Java.',
        'Monitored email inboxes for client and agent communication.',
        'Ensured JavaBatches for data and report processing.',
        'Applied fixes in promotional systems using XML Ant and Jenkins.',
        'Collaborated with teams to resolve issues and participated in Knowledge Transfer meetings.',
      ],
    },
    {
      id: 2,
      position: 'Professional Internship',
      company: 'NTTData',
      location: 'Alicante',
      time: '2022-2022',
      details: [
        'Contributed to backend development for a major banking client.',
        'Collaborated on a new frontend application using Angular.',
        'Developed and maintained applications with Spring Boot and Angular.',
        'Created REST services and managed database mappings with Hibernate and JPA.',
        'Performed MySQL queries and optimized existing code.',
      ],
    },
  ];

  private scrollTimeout: NodeJS.Timeout | string | number | undefined;

  protected readonly darkMode$ = computed(() => this.darkMode.getDarkMode());

  @HostBinding('class.dark') get mode() {
    return this.darkMode.getDarkMode();
  }

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
    scrollers.forEach(scroller => {
      // Add data-animated="true" to every `.scroller`
      scroller.setAttribute('data-animated', 'true');

      // Make an array from the elements within `.scroller-inner`
      const scrollerInner = scroller.querySelector('.scroller__inner');
      const scrollerContent = Array.from(scrollerInner?.children || []);

      // For each item in the array, clone it and append it
      scrollerContent.forEach(item => {
        const duplicatedItem = item.cloneNode(true) as HTMLElement;
        duplicatedItem.setAttribute('aria-hidden', 'true');
        scrollerInner?.appendChild(duplicatedItem);
      });
    });
  }

  // Updated function to handle hover
  addHoverListeners(scrollers: NodeListOf<Element>) {
    scrollers.forEach(scroller => {
      const listItems = scroller.querySelectorAll('.tag-list li');
      const scrollerInner = scroller.querySelector(
        '.scroller__inner'
      ) as HTMLElement;

      listItems.forEach(item => {
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
