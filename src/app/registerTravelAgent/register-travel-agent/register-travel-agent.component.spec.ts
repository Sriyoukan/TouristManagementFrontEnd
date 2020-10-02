import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterTravelAgentComponent } from './register-travel-agent.component';

describe('RegisterTravelAgentComponent', () => {
  let component: RegisterTravelAgentComponent;
  let fixture: ComponentFixture<RegisterTravelAgentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegisterTravelAgentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterTravelAgentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
