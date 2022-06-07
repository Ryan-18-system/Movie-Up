import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarFavoritosComponent } from './listar-favoritos.component';

describe('ListarFavoritosComponent', () => {
  let component: ListarFavoritosComponent;
  let fixture: ComponentFixture<ListarFavoritosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListarFavoritosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListarFavoritosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
