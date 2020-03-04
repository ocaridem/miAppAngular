import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Material1v2Component } from './material1v2.component';

describe('Material1v2Component', () => {
  let component: Material1v2Component;
  let fixture: ComponentFixture<Material1v2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Material1v2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Material1v2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
