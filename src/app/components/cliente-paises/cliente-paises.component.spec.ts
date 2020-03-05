import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientePaisesComponent } from './cliente-paises.component';

describe('ClientePaisesComponent', () => {
  let component: ClientePaisesComponent;
  let fixture: ComponentFixture<ClientePaisesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClientePaisesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClientePaisesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
