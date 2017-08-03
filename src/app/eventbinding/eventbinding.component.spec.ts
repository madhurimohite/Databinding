import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EventbindingComponent } from './eventbinding.component';

describe('EventbindingComponent', () => {
  let component: EventbindingComponent;
  let fixture: ComponentFixture<EventbindingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EventbindingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EventbindingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
