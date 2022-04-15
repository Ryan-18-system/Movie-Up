import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AclamadosPelaCriticaComponent } from './aclamados-pela-critica.component';

describe('AclamadosPelaCriticaComponent', () => {
  let component: AclamadosPelaCriticaComponent;
  let fixture: ComponentFixture<AclamadosPelaCriticaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AclamadosPelaCriticaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AclamadosPelaCriticaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
