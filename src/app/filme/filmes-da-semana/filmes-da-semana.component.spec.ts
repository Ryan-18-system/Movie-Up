import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilmesDaSemanaComponent } from './filmes-da-semana.component';

describe('FilmesDaSemanaComponent', () => {
  let component: FilmesDaSemanaComponent;
  let fixture: ComponentFixture<FilmesDaSemanaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FilmesDaSemanaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FilmesDaSemanaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
