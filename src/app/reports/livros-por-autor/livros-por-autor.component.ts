import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { catchError, of } from 'rxjs';

import { LivrosPorAutorService } from '../services/livros-por-autor.service';
import { ErrorDialogComponent } from './../../shared/component/error-dialog/error-dialog.component';
import { LivrosPorAutorData } from './../model/livros-por-autor-data';

@Component({
  selector: 'app-livros-por-autor',
  templateUrl: './livros-por-autor.component.html',
  styleUrls: ['./livros-por-autor.component.scss']
})
export class LivrosPorAutorComponent implements OnInit {

  livrosPorAutorData: LivrosPorAutorData[] = [];
  displayedColumns = [
    'nome',
    'codL',
    'titulo',
    'editora',
    'edicao',
    'anoPublicacao',
    'assuntos'
  ];
  spans: any[] = [];

  constructor(private livrosPorAutorService: LivrosPorAutorService, public dialog: MatDialog) {
    this.livrosPorAutorService.listAll()
        .pipe(
          catchError(error => {
            this.onError('Não foi possível carregar o relatório de livros por autor!');
            console.log(error.message);
            return of([])
          })
        )
        .subscribe(results => {
          this.livrosPorAutorData = results;

          this.cacheSpan('Autor', (row: LivrosPorAutorData) => row.nome, results);
        });
  }

  /**
   * Evaluated and store an evaluation of the rowspan for each row.
   * The key determines the column it affects, and the accessor determines the
   * value that should be checked for spanning.
   */
  cacheSpan(key: string, accessor: Function, data: LivrosPorAutorData[]) {
    for (let i = 0; i < data.length;) {
      let currentValue = accessor(data[i]);
      let count = 1;

      // Iterate through the remaining rows to see how many match
      // the current value as retrieved through the accessor.
      for (let j = i + 1; j < data.length; j++) {
        if (currentValue != accessor(data[j])) {
          break;
        }

        count++;
      }

      if (!this.spans[i]) {
        this.spans[i] = {};
      }

      // Store the number of similar values that were found (the span)
      // and skip i to the next unique row.
      this.spans[i][key] = count;
      i += count;
    }
  }

  getRowSpan(col: string, index: number) {
    console.log('Col: '+col);
    console.log('Index: '+index);
    console.log('Spans: '+this.spans);

    return this.spans[index] && this.spans[index][col];
  }

  onError(errorMessage: string) {
    this.dialog.open(ErrorDialogComponent, {
      data: errorMessage
    });
  }

  ngOnInit(): void {
  }

}
