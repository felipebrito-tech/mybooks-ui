import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { catchError, Observable, of } from 'rxjs';

import { ErrorDialogComponent } from './../../shared/component/error-dialog/error-dialog.component';
import { Assunto } from './../model/assunto';
import { AssuntosService } from './../services/assuntos.service';

@Component({
  selector: 'app-assuntos',
  templateUrl: './assuntos.component.html',
  styleUrls: ['./assuntos.component.scss']
})
export class AssuntosComponent implements OnInit {

  assuntos$: Observable<Assunto[]>;
  displayedColumns = ['codAs','descricao']

  constructor(private assuntosService: AssuntosService, public dialog: MatDialog) {
    this.assuntos$ = this.assuntosService.listAll()
                          .pipe(
                            catchError(error => {
                              this.onError('Não foi possível carregar os assuntos!');
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

}
