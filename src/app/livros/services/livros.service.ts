import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { first, tap } from 'rxjs';

import { Livro } from './../../livros/model/livro';

@Injectable({
  providedIn: 'root'
})
export class LivrosService {

  private readonly API = '/api/livros';

  constructor(private httpClient: HttpClient) { }

  listAll() {
    return this.httpClient.get<Livro[]>(this.API)
                .pipe(
                  first(),
                  tap(livros => console.log(livros))
                );
  }

  delete(codL: number) {
    return this.httpClient.delete<Livro>(this.API+'/'+codL);
  }
}
