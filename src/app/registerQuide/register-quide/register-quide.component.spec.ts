import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterQuideComponent } from './register-quide.component';

describe('RegisterQuideComponent', () => {
  let component: RegisterQuideComponent;
  let fixture: ComponentFixture<RegisterQuideComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegisterQuideComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterQuideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
