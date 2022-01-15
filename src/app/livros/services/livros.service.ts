import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { first, Observable, tap } from 'rxjs';

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

  createLivro(livro: Livro): Observable<Livro> {
    return this.httpClient.post<Livro>(this.API, livro);
  }

  getLivroBy(codL: number): Observable<Livro> {
    return this.httpClient.get<Livro>(`${this.API}/${codL}`);
  }

  updateLivro(livro: Livro): Observable<Livro> {
    return this.httpClient.put<Livro>(`${this.API}/${livro.codL}`, livro);
  }
}
