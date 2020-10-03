import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisteredPackageComponent } from './registered-package.component';

describe('RegisteredPackageComponent', () => {
  let component: RegisteredPackageComponent;
  let fixture: ComponentFixture<RegisteredPackageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegisteredPackageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisteredPackageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
