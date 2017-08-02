import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {MdFooterComponent} from './md-footer.component';

describe('MdFooterComponent', () => {
  let component: MdFooterComponent;
  let fixture: ComponentFixture<MdFooterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [MdFooterComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MdFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
