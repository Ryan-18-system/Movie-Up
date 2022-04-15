import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaisEsperadosComponent } from './mais-esperados.component';

describe('MaisEsperadosComponent', () => {
  let component: MaisEsperadosComponent;
  let fixture: ComponentFixture<MaisEsperadosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MaisEsperadosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MaisEsperadosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
