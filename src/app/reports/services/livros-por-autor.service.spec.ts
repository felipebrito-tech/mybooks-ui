import { TestBed } from '@angular/core/testing';

import { LivrosPorAutorService } from './livros-por-autor.service';

describe('LivrosPorAutorService', () => {
  let service: LivrosPorAutorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LivrosPorAutorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
