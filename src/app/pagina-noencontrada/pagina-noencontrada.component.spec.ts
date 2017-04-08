import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginaNoencontradaComponent } from './pagina-noencontrada.component';

describe('PaginaNoencontradaComponent', () => {
  let component: PaginaNoencontradaComponent;
  let fixture: ComponentFixture<PaginaNoencontradaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PaginaNoencontradaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PaginaNoencontradaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
