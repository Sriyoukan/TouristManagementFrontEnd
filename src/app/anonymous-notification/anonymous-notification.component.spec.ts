import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnonymousNotificationComponent } from './anonymous-notification.component';

describe('AnonymousNotificationComponent', () => {
  let component: AnonymousNotificationComponent;
  let fixture: ComponentFixture<AnonymousNotificationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnonymousNotificationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnonymousNotificationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
