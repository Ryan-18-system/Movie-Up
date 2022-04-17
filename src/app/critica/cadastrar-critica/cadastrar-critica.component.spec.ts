import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastrarCriticaComponent } from './cadastrar-critica.component';

describe('CadastrarCriticaComponent', () => {
  let component: CadastrarCriticaComponent;
  let fixture: ComponentFixture<CadastrarCriticaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CadastrarCriticaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CadastrarCriticaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
