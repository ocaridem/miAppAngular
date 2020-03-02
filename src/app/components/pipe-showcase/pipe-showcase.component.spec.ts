import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PipeShowcaseComponent } from './pipe-showcase.component';

describe('PipeShowcaseComponent', () => {
  let component: PipeShowcaseComponent;
  let fixture: ComponentFixture<PipeShowcaseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PipeShowcaseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PipeShowcaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
