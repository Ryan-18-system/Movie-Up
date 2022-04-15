import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FavoritosDaSemanaComponent } from './favoritos-da-semana.component';

describe('FavoritosDaSemanaComponent', () => {
  let component: FavoritosDaSemanaComponent;
  let fixture: ComponentFixture<FavoritosDaSemanaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FavoritosDaSemanaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FavoritosDaSemanaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
