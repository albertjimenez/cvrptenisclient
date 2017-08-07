import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {ImageSolutionComponent} from './image-solution.component';

describe('ImageSolutionComponent', () => {
  let component: ImageSolutionComponent;
  let fixture: ComponentFixture<ImageSolutionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ImageSolutionComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImageSolutionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
