import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { first, tap } from 'rxjs';

import { Autor } from './../model/autor';

@Injectable({
  providedIn: 'root'
})
export class AutoresService {

  private readonly API = '/api/autores';

  constructor(private httpClient: HttpClient) { }

  listAll() {
    return this.httpClient.get<Autor[]>(this.API)
                .pipe(
                  first(),
                  tap(autores => console.log(autores))
                );
  }
}
