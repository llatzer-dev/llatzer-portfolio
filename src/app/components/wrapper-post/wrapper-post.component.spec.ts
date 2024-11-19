import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WrapperPostComponent } from './wrapper-post.component';

describe('WrapperPostComponent', () => {
  let component: WrapperPostComponent;
  let fixture: ComponentFixture<WrapperPostComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WrapperPostComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WrapperPostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
