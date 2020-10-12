import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuidePersonalNotificationComponent } from './quide-personal-notification.component';

describe('QuidePersonalNotificationComponent', () => {
  let component: QuidePersonalNotificationComponent;
  let fixture: ComponentFixture<QuidePersonalNotificationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuidePersonalNotificationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuidePersonalNotificationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
