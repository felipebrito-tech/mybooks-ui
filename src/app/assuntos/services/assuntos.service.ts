import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { delay, first, tap } from 'rxjs';

import { Assunto } from './../model/assunto';

@Injectable({
  providedIn: 'root'
})
export class AssuntosService {

  private readonly API = '/api/assuntos';

  constructor(private httpClient: HttpClient) { }

  listAll() {
    return this.httpClient.get<Assunto[]>(this.API)
                .pipe(
                  first(),
                  tap(assuntos => console.log(assuntos))
                );
  }
}