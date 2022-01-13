import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { first, tap } from 'rxjs';

import { LivrosPorAutorData } from './../model/livros-por-autor-data';

@Injectable({
  providedIn: 'root'
})
export class LivrosPorAutorService {

  private readonly API = '/api/livros-por-autor-report';

  constructor(private httpClient: HttpClient) { }

  listAll() {
    return this.httpClient.get<LivrosPorAutorData[]>(this.API)
                .pipe(
                  first(),
                  tap(livrosPorAutorData => console.log(livrosPorAutorData))
                );
  }
}
