import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuideComponent } from './quide.component';

describe('QuideComponent', () => {
  let component: QuideComponent;
  let fixture: ComponentFixture<QuideComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuideComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
