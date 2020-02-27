import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConversorGradosComponent } from './conversor-grados.component';

describe('ConversorGradosComponent', () => {
  let component: ConversorGradosComponent;
  let fixture: ComponentFixture<ConversorGradosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConversorGradosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConversorGradosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
