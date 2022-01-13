import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { catchError, Observable, of } from 'rxjs';

import { ErrorDialogComponent } from './../../shared/component/error-dialog/error-dialog.component';
import { Autor } from './../model/autor';
import { AutoresService } from './../services/autores.service';

@Component({
  selector: 'app-autores',
  templateUrl: './autores.component.html',
  styleUrls: ['./autores.component.scss']
})
export class AutoresComponent implements OnInit {

  autores$: Observable<Autor[]>;
  displayedColumns = ['codAu','nome','acoes'];

  constructor(private autoresService: AutoresService, public dialog: MatDialog) {
    this.autores$ = this.updateAutores();
  }

  updateAutores(): Observable<Autor[]> {
    return this.autoresService.listAll()
                .pipe(
                  catchError(error => {
                    this.onError('Não foi possível carregar os autores!');
                    console.log(error.message);
                    return of([])
                  })
                );
  }

  onError(errorMessage: string) {
    this.dialog.open(ErrorDialogComponent, {
      data: errorMessage
    });
  }

  ngOnInit(): void {
  }

  edit(codAu: number) {
    console.log('edit');
  }

  delete(codAu: number) {
    this.autoresService.delete(codAu)
          .subscribe(
            () => {
              this.autores$ = this.updateAutores();
            }
          );
  }

}
