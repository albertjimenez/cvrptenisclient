import {async, ComponentFixture, TestBed} from "@angular/core/testing";

import {MdNavbarComponent} from "./md-navbar.component";

describe('MdNavbarComponent', () => {
  let component: MdNavbarComponent;
  let fixture: ComponentFixture<MdNavbarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [MdNavbarComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MdNavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
