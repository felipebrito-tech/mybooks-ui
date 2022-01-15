import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { first, Observable, tap } from 'rxjs';

import { Autor } from './../model/autor';

@Injectable({
  providedIn: 'root'
})
export class AutoresService {

  private readonly API = '/api/autores';

  constructor(private httpClient: HttpClient) { }

  listAll(): Observable<Autor[]> {
    return this.httpClient.get<Autor[]>(this.API)
                .pipe(
                  first(),
                  tap(autores => console.log(autores))
                );
  }

  delete(codAu: number) {
    return this.httpClient.delete<Autor>(this.API+'/'+codAu);
  }

  createAutor(autor: Autor): Observable<Autor> {
    return this.httpClient.post<Autor>(this.API, autor);
  }

  getAutorBy(codAu: number): Observable<Autor> {
    return this.httpClient.get<Autor>(`${this.API}/${codAu}`);
  }

  updateAutor(autor: Autor): Observable<Autor> {
    return this.httpClient.put<Autor>(`${this.API}/${autor.codAu}`, autor);
  }
}
