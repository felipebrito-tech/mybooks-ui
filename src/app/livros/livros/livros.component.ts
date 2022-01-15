import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { catchError, Observable, of } from 'rxjs';

import { ErrorDialogComponent } from './../../shared/component/error-dialog/error-dialog.component';
import { Livro } from './../model/livro';
import { LivrosService } from './../services/livros.service';

@Component({
  selector: 'app-livros',
  templateUrl: './livros.component.html',
  styleUrls: ['./livros.component.scss']
})
export class LivrosComponent implements OnInit {

  livros$: Observable<Livro[]>;
  displayedColumns = [
    'codL',
    'titulo',
    'editora',
    'edicao',
    'anoPublicacao',
    'autores',
    'assuntos',
    'acoes'
  ];

  constructor(private livrosService: LivrosService, public dialog: MatDialog) {
    this.livros$ = this.livrosService.listAll()
                          .pipe(
                            catchError(error => {
                              this.onError('Não foi possível carregar os livros!');
                              console.log(error.message);
                              return of([])
                            })
                          );
  }

  updateLivros(): Observable<Livro[]> {
    return this.livrosService.listAll()
                .pipe(
                  catchError(error => {
                    this.onError('Não foi possível carregar os livros!');
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

  delete(codL: number) {
    this.livrosService.delete(codL)
          .subscribe(
            () => {
              this.livros$ = this.updateLivros();
            }
          );
  }

}
