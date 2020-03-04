import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Material3Component } from './material3.component';

describe('Material3Component', () => {
  let component: Material3Component;
  let fixture: ComponentFixture<Material3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Material3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Material3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
