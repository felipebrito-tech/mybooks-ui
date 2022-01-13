import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LivrosPorAutorComponent } from './livros-por-autor.component';

describe('LivrosPorAutorComponent', () => {
  let component: LivrosPorAutorComponent;
  let fixture: ComponentFixture<LivrosPorAutorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LivrosPorAutorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LivrosPorAutorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
