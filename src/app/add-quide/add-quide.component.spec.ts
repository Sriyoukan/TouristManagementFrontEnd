import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddQuideComponent } from './add-quide.component';

describe('AddQuideComponent', () => {
  let component: AddQuideComponent;
  let fixture: ComponentFixture<AddQuideComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddQuideComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddQuideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
