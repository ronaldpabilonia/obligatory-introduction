import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MementosComponent } from './mementos.component';

describe('MementosComponent', () => {
  let component: MementosComponent;
  let fixture: ComponentFixture<MementosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MementosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MementosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
