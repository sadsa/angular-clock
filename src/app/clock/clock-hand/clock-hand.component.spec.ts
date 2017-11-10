import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClockHandComponent } from './clock-hand.component';

describe('ClockHandComponent', () => {
  let component: ClockHandComponent;
  let fixture: ComponentFixture<ClockHandComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClockHandComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClockHandComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
