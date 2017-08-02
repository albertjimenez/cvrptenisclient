import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {FormVanComponent} from './form-van.component';

describe('FormVanComponent', () => {
  let component: FormVanComponent;
  let fixture: ComponentFixture<FormVanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [FormVanComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormVanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
