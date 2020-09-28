import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaOfertasComponent } from './lista-ofertas.component';

describe('OfertasComponent', () => {
  let component: ListaOfertasComponent;
  let fixture: ComponentFixture<ListaOfertasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListaOfertasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaOfertasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
