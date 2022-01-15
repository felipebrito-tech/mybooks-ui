import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { catchError, of } from 'rxjs';
import { ErrorDialogComponent } from 'src/app/shared/component/error-dialog/error-dialog.component';

import { AssuntosService } from '../services/assuntos.service';
import { Assunto } from './../model/assunto';

@Component({
  selector: 'app-assuntos-create',
  templateUrl: './assuntos-create.component.html',
  styleUrls: ['./assuntos-create.component.scss']
})
export class AssuntosCreateComponent implements OnInit {

  assunto: Assunto =  this.newAssunto();

  constructor(private assuntosService: AssuntosService, public dialog: MatDialog, private router: Router) { }

  onError(errorMessage: string) {
    this.dialog.open(ErrorDialogComponent, {
      data: errorMessage
    });
  }

  ngOnInit(): void {
  }

  createAssunto(): void {
    this.assuntosService.createAssunto(this.assunto)
          .pipe(
            catchError(error => {
              this.onError('Não foi possível cadastrar o assunto!');
              console.log(error.message);
              return of([])
            })
          )
          .subscribe(
            () => {
              this.clearModel();
              this.router.navigateByUrl('assuntos');
            }
          );
  }

  clearModel(): void {
    this.assunto = this.newAssunto();
  }

  newAssunto() {
    return { codAs: 0, descricao: '' };
  }
}
