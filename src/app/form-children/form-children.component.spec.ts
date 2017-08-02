import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {FormChildrenComponent} from './form-children.component';

describe('FormChildrenComponent', () => {
  let component: FormChildrenComponent;
  let fixture: ComponentFixture<FormChildrenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [FormChildrenComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormChildrenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
