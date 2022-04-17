import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarCriticaComponent } from './listar-critica.component';

describe('ListarCriticaComponent', () => {
  let component: ListarCriticaComponent;
  let fixture: ComponentFixture<ListarCriticaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListarCriticaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListarCriticaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
