import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { first, Observable, tap } from 'rxjs';

import { Assunto } from './../model/assunto';

@Injectable({
  providedIn: 'root'
})
export class AssuntosService {

  private readonly API = '/api/assuntos';

  constructor(private httpClient: HttpClient) { }

  listAll(): Observable<Assunto[]> {
    return this.httpClient.get<Assunto[]>(this.API)
                .pipe(
                  first(),
                  tap(assuntos => console.log(assuntos))
                );
  }

  delete(codAs: number): Observable<Assunto> {
    return this.httpClient.delete<Assunto>(`${this.API}/${codAs}`);
  }

  createAssunto(assunto: Assunto): Observable<Assunto> {
    return this.httpClient.post<Assunto>(this.API, assunto);
  }

  getAssuntoBy(codAs: number): Observable<Assunto> {
    return this.httpClient.get<Assunto>(`${this.API}/${codAs}`);
  }

  updateAssunto(assunto: Assunto): Observable<Assunto> {
    return this.httpClient.put<Assunto>(`${this.API}/${assunto.codAs}`, assunto);
  }
}
