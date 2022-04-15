import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuscarFilmesComponent } from './buscar-filmes.component';

describe('BuscarFilmesComponent', () => {
  let component: BuscarFilmesComponent;
  let fixture: ComponentFixture<BuscarFilmesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BuscarFilmesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BuscarFilmesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
