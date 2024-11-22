import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CareerAccordionComponent } from './career-accordion.component';

describe('CareerAccordionComponent', () => {
  let component: CareerAccordionComponent;
  let fixture: ComponentFixture<CareerAccordionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CareerAccordionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CareerAccordionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
