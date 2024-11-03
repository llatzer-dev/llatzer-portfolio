import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LetstalkComponent } from './letstalk.component';

describe('LetstalkComponent', () => {
  let component: LetstalkComponent;
  let fixture: ComponentFixture<LetstalkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LetstalkComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LetstalkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
